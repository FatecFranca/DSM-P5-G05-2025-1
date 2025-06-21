const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const User = sequelize.define('TBUSERS', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  resultado_predict: {
    type: DataTypes.STRING,
    allowNull: true,
  }
}, {
  timestamps: false, 
  freezeTableName: true 
});

module.exports = User;
