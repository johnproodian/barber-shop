const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        name: String
        email: String
        haircuts: [Haircut]
    }

    type Haircut {
        _id: ID
        haircutText: String
        name: String
        instructions: String

    }

    type Query {
        me: User
        users: [User]
        user(name: String!): User
        haircuts(name: String!): [Haircut]
    }

    type Auth {
        token: ID!
        user: User
      }

    type Mutation {
        login(name: String!, password: String!): Auth
        addUser(name: String!, email: String!, password: String!): Auth
        addHaircut(haircutText: String!, instructions: String): Haircut
        deleteHaircut(_id: ID!): User
        deleteInstructions(_id: ID!): Haircut
    }
`;

module.exports = typeDefs;