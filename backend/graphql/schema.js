const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Admin {
    id: String!
    username: String
    email: String!
    createdAt: String!
    updatedAt: String!
  }

  type LegalOpinion {
    id: String!
    name: String!
    position: String!
    division: String!
    officeEmail: String!
    reviewType: String!
    issueTitle: String!
    chronology: String!
    questions: String!
    createdAt: String!
  }

  type User {
    id: ID!
    username: String!
    token: String
  }

  type Query {
    getAllLegalOpinions: [LegalOpinion]
    getAdminItems: [Admin]
    me: User
  }

  type Mutation {
    createLegalOpinion(
      name: String!
      position: String!
      division: String!
      officeEmail: String!
      reviewType: String!
      issueTitle: String!
      chronology: String!
      questions: String!
    ): LegalOpinion

    createAdmin(username: String!, email: String!, password: String!): Admin
    login(username: String!, password: String!): User
  }
`;

module.exports = typeDefs;
