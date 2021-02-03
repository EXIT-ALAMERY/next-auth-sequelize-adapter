'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('sessions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      userId: {
        type: DataTypes.INTEGER,
        field: 'user_id'
      },
      expires: {
        type: DataTypes.DATE
      },
      sessionToken: {
        type: DataTypes.STRING,
        field: 'session_token',
        unique: true
      },
      accessToken: {
        type: DataTypes.STRING,
        field: 'access_token',
        unique: true
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('sessions');
  }
};