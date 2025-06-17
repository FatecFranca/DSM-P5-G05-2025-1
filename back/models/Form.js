const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Form = sequelize.define('Form', {
  preg: {
    type: DataTypes.STRING,
    allowNull: false
  },
  plas: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pres: {
    type: DataTypes.STRING,
    allowNull: false
  },
  skin: {
    type: DataTypes.STRING,
    allowNull: false
  },
  insu: {
    type: DataTypes.STRING,
    allowNull: false
  },
  mass: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pedi: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'TBTRAIN',
  timestamps: false
});

module.exports = Form;
