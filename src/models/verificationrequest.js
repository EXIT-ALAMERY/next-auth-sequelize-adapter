'use strict';
import verificationRequestSchema from '../schemas/verificationRequestSchema';

const verificationRequestModel = (Model, sequelize, Sequelize) => {
  class VerificationRequest extends Model {
    static associate(models) {
      // define association here
    }
  };
  VerificationRequest.init(verificationRequestSchema(Sequelize), {
    sequelize,
    tableName: 'verification_requests',
    modelName: 'VerificationRequest',
  });

  return VerificationRequest;
};

export default verificationRequestModel;