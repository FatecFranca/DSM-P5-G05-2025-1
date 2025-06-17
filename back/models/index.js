const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false, // Desativa logs para performance
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conectado ao MySQL com sucesso!');
  } catch (err) {
    console.error('❌ Erro ao conectar ao MySQL:', err);
  }
}

testConnection();

module.exports = sequelize;