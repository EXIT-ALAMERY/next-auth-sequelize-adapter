'use strict';
import userSchema from '../schemas/userSchema';

const userModel = (Model, sequelize, Sequelize) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  };
  User.init(userSchema(Sequelize), {
    sequelize,
    tableName: 'users',
    modelName: 'User',
  });

  return User;
};

export default userModel;