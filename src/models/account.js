'use strict';
import accountSchema from '../schemas/accountSchema';

const accountModel = (Model, sequelize, Sequelize) => {
  class Account extends Model {
    static associate(models) {
      // define association here
    }
  };
  Account.init(accountSchema(Sequelize), {
    sequelize,
    tableName: 'accounts',
    modelName: 'Account',
    indexes: [
    {
      name: "providerAccountId",
      unique: true,
      fields: ['providerAccountId']
    },
    {
      name: "providerId",
      unique: true,
      fields: ['providerId']
    },
    {
      name: "userId",
      unique: true,
      fields: ['userId']
    }]
  });

  return Account;
};

export default accountModel;

