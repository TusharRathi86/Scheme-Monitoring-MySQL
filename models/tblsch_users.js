'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tblsch_users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tblsch_users.init({
    role: {
      type: DataTypes.STRING,
      defaultValue: 'BLANK',
    },
    fullName: DataTypes.STRING,
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER,
    address: DataTypes.STRING,
    password: DataTypes.STRING,
    stCode: DataTypes.STRING,
    state: DataTypes.STRING,
    department: DataTypes.STRING,
    resetPassword: {
      type: DataTypes.STRING,
      defaultValue: 'N'
    },
    sessionVar: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    }
  }, {
    sequelize,
    modelName: 'Tblsch_users',
  });
  return Tblsch_users;
};