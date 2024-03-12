/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getPosts = /* GraphQL */ `query GetPosts($id: ID!) {
  getPosts(id: $id) {
    id
    title
    description
    year
    discipline
    project
    type
    thumbnail_url
    url
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPostsQueryVariables, APITypes.GetPostsQuery>;
export const listPosts = /* GraphQL */ `query ListPosts(
  $filter: ModelPostsFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      year
      discipline
      project
      type
      thumbnail_url
      url
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListPostsQueryVariables, APITypes.ListPostsQuery>;
