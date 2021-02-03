'use strict';

const userSchema = DataTypes => ({
  name: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  emailVerified: {
    type: DataTypes.DATE,
    field: 'email_verified',
  },
  image: DataTypes.STRING,
});

export default userSchema;