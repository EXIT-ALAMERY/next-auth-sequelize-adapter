'use strict';

const sessionSchema = DataTypes => ({
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
});

export default sessionSchema;