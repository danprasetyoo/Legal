const prisma = require('@prisma/client').PrismaClient;
const prismaClient = new prisma();
const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');

const resolvers = {
  Query: {
    getAllLegalOpinions: async () => {
      return await prismaClient.legalOpinion.findMany();
    },
    getAdminItems: async () => {
      return await prismaClient.admin.findMany();
    },
    me: (_, __, context) => {
      if (!context.user) {
        throw new Error('Not authenticated');
      }
      return context.user;
    },
  },
  Mutation: {
    createLegalOpinion: async (_, args) => {
      return await prismaClient.legalOpinion.create({ data: args });
    },
    createAdmin: async (_, { username, email, password }) => {
      return await prismaClient.admin.create({
        data: { username, email, password },
      });
    },
    login: async (_, { username, password }) => {
      const user = await Admin.findByUsername(username, password);
      if (!user) {
        throw new Error('Invalid credentials');
      }
      const token = jwt.sign(
        { id: user.id, username: user.username },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '1h' }
      );
      return { id: user.id, username: user.username, token };
    },
  },
};

module.exports = resolvers;
