const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Form = sequelize.define('Form', {
  preg: DataTypes.STRING,
  plas: DataTypes.STRING,
  pres: DataTypes.STRING,
  skin: DataTypes.STRING,
  insu: DataTypes.STRING,
  mass: DataTypes.STRING,
  pedi: DataTypes.STRING,
  age: DataTypes.STRING
}, {
  tableName: 'TBTRAIN',
  timestamps: false
});

module.exports = Form;
