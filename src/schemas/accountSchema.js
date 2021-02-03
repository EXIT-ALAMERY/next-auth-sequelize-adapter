'use strict';

const accountSchema = DataTypes => ({
  compoundId: {
    type: DataTypes.STRING,
    field: 'compound_id',
    unique: true
  },
  userId: {
    type: DataTypes.INTEGER,
    field: 'user_id'
  },
  providerType: {
    type: DataTypes.STRING,
    field: 'provider_type'
  },
  providerId: {
    type: DataTypes.STRING,
    field: 'provider_id'
  },
  providerAccountId: {
    type: DataTypes.STRING,
    field: 'provider_account_id'
  },
  refreshToken: {
    type: DataTypes.STRING,
    field: 'refresh_token'
  },
  accessToken: {
    type: DataTypes.STRING,
    field: 'access_token'
  },
  accessTokenExpires: {
    type: DataTypes.DATE,
    field: 'access_token_expires'
  }
});

export default accountSchema;