"use strict";

export const accountSchema = (DataTypes) => ({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  compoundId: {
    type: DataTypes.STRING,
    unique: true,
  },
  userId: {
    type: DataTypes.STRING,
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
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  userId: {
    type: DataTypes.STRING,
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
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
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
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
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
