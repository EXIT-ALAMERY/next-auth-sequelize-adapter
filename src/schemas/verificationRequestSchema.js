'use strict';

const verificationRequestSchema = DataTypes => ({
  identitifer: DataTypes.STRING,
  token: {
    type: DataTypes.STRING,
    unique: true
  },
  expires: DataTypes.DATE
});

export default verificationRequestSchema;