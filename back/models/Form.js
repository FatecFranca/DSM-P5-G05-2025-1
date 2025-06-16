const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Form = sequelize.define('Form', {
  preg: DataTypes.STRING,
  plas: DataTypes.STRING,
  ples: DataTypes.STRING,
  skin: DataTypes.STRING,
  insu: DataTypes.STRING,
  mass: DataTypes.STRING,
  pedi: DataTypes.STRING,
  age: DataTypes.STRING
});

module.exports = Form;
