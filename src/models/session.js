'use strict';
import sessionSchema from '../schemas/sessionSchema';

const sessionModel = (Model, sequelize, Sequelize) => {
  class Session extends Model {
    static associate(models) {
      // define association here
    }
  };
  Session.init(sessionSchema(Sequelize), {
    sequelize,
    tableName: 'sessions',
    modelName: 'Session',
  });

  return Session;
};

export default sessionModel;