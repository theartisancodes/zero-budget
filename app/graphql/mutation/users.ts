import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser(
    $email: String!
    $password: String!
    $userName: String!
    $phoneNumber: String!
  ) {
    createUser(
      email: $email
      password: $password
      userName: $userName
      phoneNumber: $phoneNumber
    ) {
      userName
      email
      phoneNumber
      password
    }
  }
`;
