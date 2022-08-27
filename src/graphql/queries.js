/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      clientId
      markdown
      title
      createdAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts {
    listPosts(limit: 500) {
      items {
        id
        clientId
        title
        createdAt
      }
    }
  }
`;
