const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Result = sequelize.define('TBRESULT', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  preg: { type: DataTypes.STRING, allowNull: false },
  plas: { type: DataTypes.STRING, allowNull: false },
  pres: { type: DataTypes.STRING, allowNull: false },
  skin: { type: DataTypes.STRING, allowNull: false },
  insu: { type: DataTypes.STRING, allowNull: false },
  mass: { type: DataTypes.STRING, allowNull: false },
  pedi: { type: DataTypes.STRING, allowNull: false },
  age:  { type: DataTypes.STRING, allowNull: false },
  class: { type: DataTypes.STRING, allowNull: true },
  predicted: { type: DataTypes.STRING, allowNull: true }
}, {
  timestamps: false,
  freezeTableName: true
});

module.exports = Result;
