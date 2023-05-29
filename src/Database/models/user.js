/* eslint-disable linebreak-style */
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  /**
   * @class
   */
  class User extends Model {
    /**
     * @returns {number}.
     */
    static associate() {}
  }
  User.init(
    {
      fullname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      birthdate: {
        type: DataTypes.DATE,
        allowNull: true,
        unique: true,
      },
      preferredLanguage: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      preferredCurrency: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      homeAddress: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      billingAddress: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      isEnabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profileImage: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },
      enable2FA: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      checkTwoFactor: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      isExpired: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      lastTimePasswordUpdate: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
