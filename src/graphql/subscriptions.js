/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost {
      id
      clientId
      markdown
      title
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost {
      id
      clientId
      markdown
      title
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost {
      id
      clientId
      markdown
      title
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePostWithId = `subscription onUpdatePostWithId($id: ID!) {
  onUpdatePostWithId(id: $id) {
    id
    clientId
    markdown
    title
    createdAt
  }
}
`;