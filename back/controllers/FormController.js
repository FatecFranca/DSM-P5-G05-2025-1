const Form = require('../models/Form');

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
