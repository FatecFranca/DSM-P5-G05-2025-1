const Form = require('../models/Form');
const Result = require('../models/Result');
const { spawn } = require('child_process');
const path = require('path');

exports.createFormEntry = async (req, res) => {
  try {
    // Validação básica do JSON recebido
    const requiredFields = ['preg', 'plas', 'pres', 'skin', 'insu', 'mass', 'pedi', 'age'];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ error: `Campo obrigatório ausente: ${field}` });
      }
    }
    const data = await Form.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao salvar os dados', details: err.message });
  }
};

exports.predict = async (req, res) => {
  try {
    const inputData = req.body;
    // Usa o Python do ambiente virtual
    const pythonPath = path.resolve(__dirname, '../.venv/Scripts/python.exe');
    const scriptPath = path.resolve(__dirname, '../predict.py');
    const python = spawn(pythonPath, [scriptPath, JSON.stringify(inputData)]);
    let result = '';
    let error = '';
    python.stdout.on('data', (data) => {
      result += data.toString();
    });
    python.stderr.on('data', (data) => {
      error += data.toString();
    });
    python.on('close', async (code) => {
      if (code !== 0) {
        return res.status(500).json({ error: 'Erro ao executar predição', details: error });
      }
      try {
        const prediction = JSON.parse(result.trim());
        // Salva no banco de dados
        const saved = await Result.create({
          ...inputData,
          predicao: prediction.predicao,
          class: null,
          predicted: prediction.predicao
        });
        res.json([saved]);
      } catch (e) {
        res.status(500).json({ error: 'Erro ao interpretar resposta do modelo', details: result });
      }
    });
  } catch (err) {
    res.status(500).json({ error: 'Erro interno', details: err.message });
  }
};

exports.getResults = async (req, res) => {
  try {
    const results = await Result.findAll();
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar resultados', details: err.message });
  }
};
