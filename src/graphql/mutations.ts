/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createPosts = /* GraphQL */ `mutation CreatePosts(
  $input: CreatePostsInput!
  $condition: ModelPostsConditionInput
) {
  createPosts(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePostsMutationVariables,
  APITypes.CreatePostsMutation
>;
export const updatePosts = /* GraphQL */ `mutation UpdatePosts(
  $input: UpdatePostsInput!
  $condition: ModelPostsConditionInput
) {
  updatePosts(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePostsMutationVariables,
  APITypes.UpdatePostsMutation
>;
export const deletePosts = /* GraphQL */ `mutation DeletePosts(
  $input: DeletePostsInput!
  $condition: ModelPostsConditionInput
) {
  deletePosts(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePostsMutationVariables,
  APITypes.DeletePostsMutation
>;
