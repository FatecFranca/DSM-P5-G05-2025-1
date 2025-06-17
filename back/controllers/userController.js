const User = require('../models/User');

exports.createUser = async (req, res) => {
  try {
    // Validação básica dos campos obrigatórios
    const requiredFields = ['nome', 'email', 'senha'];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ erro: `Campo obrigatório ausente: ${field}` });
      }
    }
    
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    console.error('Erro ao criar usuário:', err);
    res.status(400).json({ erro: err.message });
  }
};

exports.getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

exports.getUserById = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  user ? res.json(user) : res.status(404).json({ erro: 'Usuário não encontrado' });
};

exports.updateUser = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    await user.update(req.body);
    res.json(user);
  } else {
    res.status(404).json({ erro: 'Usuário não encontrado' });
  }
};

exports.deleteUser = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    await user.destroy();
    res.json({ msg: 'Usuário deletado' });
  } else {
    res.status(404).json({ erro: 'Usuário não encontrado' });
  }
};