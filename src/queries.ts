import { gql, type TypedDocumentNode } from "@apollo/client";
import type { UserData, UserVariables } from "./types";

export const GET_USER: TypedDocumentNode<UserData, UserVariables> = gql`
  query ($login: String!) {
    user(login: $login) {
      login
      name
      avatarUrl
      bio
      url
      repositories(first: 100) {
        totalCount
        nodes {
          name
          description
          stargazerCount
          forkCount
          url
          languages(first: 5) {
            edges {
              node {
                name
              }
              size
            }
          }
        }
      }
      followers {
        totalCount
      }
      following {
        totalCount
      }
      gists {
        totalCount
      }
    }
  }
`;
