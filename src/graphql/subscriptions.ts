/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreatePosts = /* GraphQL */ `subscription OnCreatePosts($filter: ModelSubscriptionPostsFilterInput) {
  onCreatePosts(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePostsSubscriptionVariables,
  APITypes.OnCreatePostsSubscription
>;
export const onUpdatePosts = /* GraphQL */ `subscription OnUpdatePosts($filter: ModelSubscriptionPostsFilterInput) {
  onUpdatePosts(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePostsSubscriptionVariables,
  APITypes.OnUpdatePostsSubscription
>;
export const onDeletePosts = /* GraphQL */ `subscription OnDeletePosts($filter: ModelSubscriptionPostsFilterInput) {
  onDeletePosts(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePostsSubscriptionVariables,
  APITypes.OnDeletePostsSubscription
>;
