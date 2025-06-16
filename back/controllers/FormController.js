const Form = require('../models/Form');

exports.createFormEntry = async (req, res) => {
  try {
    const data = await Form.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao salvar os dados' });
  }
};
