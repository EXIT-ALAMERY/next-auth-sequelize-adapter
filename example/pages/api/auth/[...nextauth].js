import NextAuth from 'next-auth'
import Providers from 'next-auth/providers';

// import the local db object and the Adapter
import db from '../../../db/models';
import { Adapter } from 'next-auth-sequelize-adapter';

const options = {
  // specify all the OAuth providers here
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),
  ],

  // specify the database connection string
  database: process.env.DATABASE_CONNECTION_STRING,

  // specify that next-auth should use the sequelize adapter instead of the default TypeORM adapter and pass the db instance as models
  adapter: Adapter.Adapter({ models: db })
};

export default (req, res) => NextAuth(req, res, options);