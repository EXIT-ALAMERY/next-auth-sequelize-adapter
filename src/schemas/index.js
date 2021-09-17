"use strict";

export const accountSchema = (DataTypes) => ({
  compoundId: {
    type: DataTypes.STRING,
    unique: true,
  },
  userId: {
    type: DataTypes.INTEGER,
  },
  providerType: {
    type: DataTypes.STRING,
  },
  providerId: {
    type: DataTypes.STRING,
  },
  providerAccountId: {
    type: DataTypes.STRING,
  },
  refreshToken: {
    type: DataTypes.STRING,
  },
  accessToken: {
    type: DataTypes.STRING,
  },
  accessTokenExpires: {
    type: DataTypes.DATE,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
});

export const sessionSchema = (DataTypes) => ({
  userId: {
    type: DataTypes.INTEGER,
  },
  expires: {
    type: DataTypes.DATE,
  },
  sessionToken: {
    type: DataTypes.STRING,
    unique: true,
  },
  accessToken: {
    type: DataTypes.STRING,
    unique: true,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
});

export const userSchema = (DataTypes) => ({
  name: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  emailVerified: {
    type: DataTypes.DATE,
  },
  image: DataTypes.STRING,
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
});

export const verificationRequestSchema = (DataTypes) => ({
  identitifer: DataTypes.STRING,
  token: {
    type: DataTypes.STRING,
    unique: true,
  },
  expires: DataTypes.DATE,
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
});
