/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePostsInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  year?: number | null,
  discipline?: string | null,
  project?: string | null,
  type: string,
  thumbnail_url?: string | null,
  url: string,
};

export type ModelPostsConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  year?: ModelIntInput | null,
  discipline?: ModelStringInput | null,
  project?: ModelStringInput | null,
  type?: ModelStringInput | null,
  thumbnail_url?: ModelStringInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelPostsConditionInput | null > | null,
  or?: Array< ModelPostsConditionInput | null > | null,
  not?: ModelPostsConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type posts = {
  __typename: "posts",
  id: string,
  title: string,
  description?: string | null,
  year?: number | null,
  discipline?: string | null,
  project?: string | null,
  type: string,
  thumbnail_url?: string | null,
  url: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePostsInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  year?: number | null,
  discipline?: string | null,
  project?: string | null,
  type?: string | null,
  thumbnail_url?: string | null,
  url?: string | null,
};

export type DeletePostsInput = {
  id: string,
};

export type ModelPostsFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  year?: ModelIntInput | null,
  discipline?: ModelStringInput | null,
  project?: ModelStringInput | null,
  type?: ModelStringInput | null,
  thumbnail_url?: ModelStringInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelPostsFilterInput | null > | null,
  or?: Array< ModelPostsFilterInput | null > | null,
  not?: ModelPostsFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelPostsConnection = {
  __typename: "ModelPostsConnection",
  items:  Array<posts | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionPostsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  year?: ModelSubscriptionIntInput | null,
  discipline?: ModelSubscriptionStringInput | null,
  project?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  thumbnail_url?: ModelSubscriptionStringInput | null,
  url?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPostsFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostsFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreatePostsMutationVariables = {
  input: CreatePostsInput,
  condition?: ModelPostsConditionInput | null,
};

export type CreatePostsMutation = {
  createPosts?:  {
    __typename: "posts",
    id: string,
    title: string,
    description?: string | null,
    year?: number | null,
    discipline?: string | null,
    project?: string | null,
    type: string,
    thumbnail_url?: string | null,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePostsMutationVariables = {
  input: UpdatePostsInput,
  condition?: ModelPostsConditionInput | null,
};

export type UpdatePostsMutation = {
  updatePosts?:  {
    __typename: "posts",
    id: string,
    title: string,
    description?: string | null,
    year?: number | null,
    discipline?: string | null,
    project?: string | null,
    type: string,
    thumbnail_url?: string | null,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePostsMutationVariables = {
  input: DeletePostsInput,
  condition?: ModelPostsConditionInput | null,
};

export type DeletePostsMutation = {
  deletePosts?:  {
    __typename: "posts",
    id: string,
    title: string,
    description?: string | null,
    year?: number | null,
    discipline?: string | null,
    project?: string | null,
    type: string,
    thumbnail_url?: string | null,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPostsQueryVariables = {
  id: string,
};

export type GetPostsQuery = {
  getPosts?:  {
    __typename: "posts",
    id: string,
    title: string,
    description?: string | null,
    year?: number | null,
    discipline?: string | null,
    project?: string | null,
    type: string,
    thumbnail_url?: string | null,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostsConnection",
    items:  Array< {
      __typename: "posts",
      id: string,
      title: string,
      description?: string | null,
      year?: number | null,
      discipline?: string | null,
      project?: string | null,
      type: string,
      thumbnail_url?: string | null,
      url: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePostsSubscriptionVariables = {
  filter?: ModelSubscriptionPostsFilterInput | null,
};

export type OnCreatePostsSubscription = {
  onCreatePosts?:  {
    __typename: "posts",
    id: string,
    title: string,
    description?: string | null,
    year?: number | null,
    discipline?: string | null,
    project?: string | null,
    type: string,
    thumbnail_url?: string | null,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostsSubscriptionVariables = {
  filter?: ModelSubscriptionPostsFilterInput | null,
};

export type OnUpdatePostsSubscription = {
  onUpdatePosts?:  {
    __typename: "posts",
    id: string,
    title: string,
    description?: string | null,
    year?: number | null,
    discipline?: string | null,
    project?: string | null,
    type: string,
    thumbnail_url?: string | null,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePostsSubscriptionVariables = {
  filter?: ModelSubscriptionPostsFilterInput | null,
};

export type OnDeletePostsSubscription = {
  onDeletePosts?:  {
    __typename: "posts",
    id: string,
    title: string,
    description?: string | null,
    year?: number | null,
    discipline?: string | null,
    project?: string | null,
    type: string,
    thumbnail_url?: string | null,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
