import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!, $role: String) {
    addUser(name: $name, email: $email, password: $password, role: $role) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const ADD_HAIRCUT = gql`
  mutation addHaircut($haircutText: String!, $instructions: String) {
    addHaircut(haircutText: $haircutText, instructions: $instructions) {
      _id
      haircutText
      name
      instructions
    }
  }
`;

export const REMOVE_HAIRCUT = gql`
  mutation removeHaircut($id: ID!) {
    removeHaircut(id: $id) {
      _id
      name
      haircut {
        _id
        name
      }
    }
  }
`;