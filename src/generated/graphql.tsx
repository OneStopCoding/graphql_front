import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type City = {
  __typename?: 'City';
  name: Scalars['ID']['output'];
};

export type Comment = {
  __typename?: 'Comment';
  author: User;
  id: Scalars['ID']['output'];
  likes: Array<User>;
  post: Scalars['ID']['output'];
  text: Scalars['String']['output'];
};

export type CommentIn = {
  post: Scalars['ID']['input'];
  text: Scalars['String']['input'];
};

export type Country = {
  __typename?: 'Country';
  name: Scalars['ID']['output'];
};

export type Dm = {
  __typename?: 'DM';
  id: Scalars['ID']['output'];
  images: Array<Scalars['String']['output']>;
  read: Scalars['Boolean']['output'];
  receiver: User;
  sender: User;
  text: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type DmIn = {
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  receiver: Scalars['String']['input'];
  text: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Image = {
  __typename?: 'Image';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  uri: Scalars['String']['output'];
};

export type ImageIn = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  uri: Scalars['String']['input'];
};

export type Location = {
  __typename?: 'Location';
  city: City;
  country: Country;
  provence: Provence;
};

export type LocationIn = {
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  provence?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addComment: Post;
  addPost: Post;
  createProfile: Profile;
  deleteComment: Scalars['Boolean']['output'];
  deleteDM: Scalars['Boolean']['output'];
  deletePost: Scalars['Boolean']['output'];
  deleteUser: Array<User>;
  follow: Profile;
  like: Post;
  login: Scalars['String']['output'];
  register: Scalars['String']['output'];
  sendDM: Profile;
  unFollow: Profile;
  unLike: Post;
};


export type MutationAddCommentArgs = {
  commentIn: CommentIn;
};


export type MutationAddPostArgs = {
  postIn: PostIn;
};


export type MutationCreateProfileArgs = {
  profile: ProfileIn;
};


export type MutationDeleteCommentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteDmArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePostArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationFollowArgs = {
  username: Scalars['String']['input'];
};


export type MutationLikeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLoginArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  input: UserInput;
};


export type MutationSendDmArgs = {
  dm: DmIn;
};


export type MutationUnFollowArgs = {
  username: Scalars['String']['input'];
};


export type MutationUnLikeArgs = {
  id: Scalars['ID']['input'];
};

export type Post = {
  __typename?: 'Post';
  author: User;
  body: Scalars['String']['output'];
  comments: Array<Comment>;
  id: Scalars['ID']['output'];
  images: Array<Scalars['String']['output']>;
  likes: Array<User>;
  title: Scalars['String']['output'];
};

export type PostIn = {
  body: Scalars['String']['input'];
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title: Scalars['String']['input'];
};

export type Profile = {
  __typename?: 'Profile';
  bio?: Maybe<Scalars['String']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  followers?: Array<User>;
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  lastname?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Location>;
  messages?: Maybe<Array<Maybe<Dm>>>;
  profilePic?: Maybe<Scalars['String']['output']>;
  socials?: Maybe<Socials>;
  user: User;
};

export type ProfileIn = {
  bio?: InputMaybe<Scalars['String']['input']>;
  firstname: Scalars['String']['input'];
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lastname: Scalars['String']['input'];
  location?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  profilePic?: InputMaybe<Scalars['String']['input']>;
  socials?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Provence = {
  __typename?: 'Provence';
  name: Scalars['ID']['output'];
};

export type Query = {
  __typename?: 'Query';
  allPosts: Array<Maybe<Post>>;
  allUsers: Array<Maybe<User>>;
  getDM: Dm;
  getDmForUser?: Maybe<Array<Dm>>;
  getProfile?: Maybe<Profile>;
  getProfileByUsername?: Maybe<Profile>;
  helloWorld: Scalars['String']['output'];
  postsForUser?: Maybe<Array<Maybe<Post>>>;
  recentPost?: Maybe<Array<Maybe<Post>>>;
  userByUsername?: Maybe<User>;
};


export type QueryGetDmArgs = {
  title: Scalars['String']['input'];
};


export type QueryGetProfileByUsernameArgs = {
  username: Scalars['String']['input'];
};


export type QueryPostsForUserArgs = {
  author: Scalars['String']['input'];
};


export type QueryRecentPostArgs = {
  page: Scalars['Int']['input'];
  size: Scalars['Int']['input'];
};


export type QueryUserByUsernameArgs = {
  username: Scalars['String']['input'];
};

export type Socials = {
  __typename?: 'Socials';
  fb?: Maybe<Scalars['String']['output']>;
  github?: Maybe<Scalars['String']['output']>;
  instagram?: Maybe<Scalars['String']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

export type SocialsIn = {
  fb?: InputMaybe<Scalars['String']['input']>;
  github?: InputMaybe<Scalars['String']['input']>;
  instagram?: InputMaybe<Scalars['String']['input']>;
  twitter?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['ID']['output'];
  password: Scalars['String']['output'];
  roles?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
};

export type UserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  roles: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type LoginMutationVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: string };

export type RegisterMutationVariables = Exact<{
  email: Scalars['String']['input'];
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: string };

export type FollowMutationVariables = Exact<{
  username: Scalars['String']['input'];
}>;


export type FollowMutation = { __typename?: 'Mutation', follow?: { __typename?: 'Profile', firstname?: string | null, lastname?: string | null, profilePic?: string | null, images?: Array<string | null> | null, bio?: string | null, user: { __typename?: 'User', email: string, username: string, password: string, roles?: string | null }, location?: { __typename?: 'Location', city: { __typename?: 'City', name: string }, provence: { __typename?: 'Provence', name: string }, country: { __typename?: 'Country', name: string } } | null, socials?: { __typename?: 'Socials', website?: string | null, github?: string | null, twitter?: string | null, instagram?: string | null, fb?: string | null } | null, followers?: Array<{ __typename?: 'User', username: string } | null> | null, messages?: Array<{ __typename?: 'DM', title?: string | null, text: string, images?: Array<string | null> | null, read: boolean, sender: { __typename?: 'User', username: string }, receiver: { __typename?: 'User', username: string } } | null> | null } | null };

export type AddPostMutationVariables = Exact<{
  title: Scalars['String']['input'];
  body: Scalars['String']['input'];
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type AddPostMutation = { __typename?: 'Mutation', addPost: { __typename?: 'Post', title: string, body: string, images?: Array<string | null> | null, author: { __typename?: 'User', username: string }, comments: Array<{ __typename?: 'Comment', text: string, author: { __typename?: 'User', username: string } }> } };

export type CreateProfileMutationVariables = Exact<{
  firstname: Scalars['String']['input'];
  lastname: Scalars['String']['input'];
  profilePic?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  location?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  socials?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  bio?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateProfileMutation = { __typename?: 'Mutation', createProfile: { __typename?: 'Profile', firstname?: string | null, lastname?: string | null, profilePic?: string | null, images?: Array<string | null> | null, bio?: string | null, user: { __typename?: 'User', email: string, username: string, password: string, roles?: string | null }, location?: { __typename?: 'Location', city: { __typename?: 'City', name: string }, provence: { __typename?: 'Provence', name: string }, country: { __typename?: 'Country', name: string } } | null, socials?: { __typename?: 'Socials', website?: string | null, github?: string | null, twitter?: string | null, instagram?: string | null, fb?: string | null } | null, followers?: Array<{ __typename?: 'User', username: string } | null> | null, messages?: Array<{ __typename?: 'DM', title?: string | null, text: string, images?: Array<string | null> | null, read: boolean, sender: { __typename?: 'User', username: string }, receiver: { __typename?: 'User', username: string } } | null> | null } };

export type SendDmMutationVariables = Exact<{
  title?: InputMaybe<Scalars['String']['input']>;
  receiver: Scalars['String']['input'];
  text: Scalars['String']['input'];
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type SendDmMutation = { __typename?: 'Mutation', sendDM?: { __typename?: 'Profile', firstname?: string | null, lastname?: string | null, profilePic?: string | null, images?: Array<string | null> | null, bio?: string | null, user: { __typename?: 'User', email: string, username: string, password: string, roles?: string | null }, location?: { __typename?: 'Location', city: { __typename?: 'City', name: string }, provence: { __typename?: 'Provence', name: string }, country: { __typename?: 'Country', name: string } } | null, socials?: { __typename?: 'Socials', website?: string | null, github?: string | null, twitter?: string | null, instagram?: string | null, fb?: string | null } | null, followers?: Array<{ __typename?: 'User', username: string } | null> | null, messages?: Array<{ __typename?: 'DM', title?: string | null, text: string, images?: Array<string | null> | null, read: boolean, sender: { __typename?: 'User', username: string }, receiver: { __typename?: 'User', username: string } } | null> | null } | null };

export type AddCommentMutationVariables = Exact<{
  text: Scalars['String']['input'];
  postId: Scalars['ID']['input'];
}>;


export type AddCommentMutation = { __typename?: 'Mutation', addComment: { __typename?: 'Post', title: string, author: { __typename?: 'User', username: string }, comments: Array<{ __typename?: 'Comment', text: string, author: { __typename?: 'User', username: string }, likes: Array<{ __typename?: 'User', username: string }> }> } };

export type DeleteCommentMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteCommentMutation = { __typename?: 'Mutation', deleteComment: boolean };

export type DeletePostMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost: boolean };

export type DeleteDmMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteDmMutation = { __typename?: 'Mutation', deleteDM: boolean };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: Array<{ __typename?: 'User', email: string, username: string, roles?: string | null } | null> };

export type UnFollowMutationVariables = Exact<{
  username: Scalars['String']['input'];
}>;


export type UnFollowMutation = { __typename?: 'Mutation', unFollow: { __typename?: 'Profile', firstname?: string | null, lastname?: string | null, profilePic?: string | null, images?: Array<string | null> | null, bio?: string | null, user: { __typename?: 'User', email: string, username: string, password: string, roles?: string | null }, location?: { __typename?: 'Location', city: { __typename?: 'City', name: string }, provence: { __typename?: 'Provence', name: string }, country: { __typename?: 'Country', name: string } } | null, socials?: { __typename?: 'Socials', website?: string | null, github?: string | null, twitter?: string | null, instagram?: string | null, fb?: string | null } | null, followers?: Array<{ __typename?: 'User', username: string } | null> | null, messages?: Array<{ __typename?: 'DM', title?: string | null, text: string, images?: Array<string | null> | null, read: boolean, sender: { __typename?: 'User', username: string }, receiver: { __typename?: 'User', username: string } } | null> | null } };

export type LikeMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type LikeMutation = { __typename?: 'Mutation', like: { __typename?: 'Post', title: string, body: string, images?: Array<string | null> | null, author: { __typename?: 'User', username: string }, comments: Array<{ __typename?: 'Comment', text: string, author: { __typename?: 'User', username: string }, likes: Array<{ __typename?: 'User', email: string, username: string, password: string, roles?: string | null }> }>, likes: Array<{ __typename?: 'User', email: string, username: string, password: string, roles?: string | null }> } };

export type UnLikeMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type UnLikeMutation = { __typename?: 'Mutation', unLike: { __typename?: 'Post', title: string, body: string, images?: Array<string | null> | null, author: { __typename?: 'User', username: string }, comments: Array<{ __typename?: 'Comment', text: string, author: { __typename?: 'User', username: string }, likes: Array<{ __typename?: 'User', email: string, username: string, password: string, roles?: string | null }> }>, likes: Array<{ __typename?: 'User', email: string, username: string, password: string, roles?: string | null }> } };

export type HelloWorldQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloWorldQuery = { __typename?: 'Query', helloWorld: string };

export type PostsByUserQueryVariables = Exact<{
  author: Scalars['String']['input'];
}>;


export type PostsByUserQuery = { __typename?: 'Query', postsForUser?: Array<{ __typename?: 'Post', id: string, title: string, body: string, images?: Array<string | null> | null, author: { __typename?: 'User', username: string }, comments: Array<{ __typename?: 'Comment', text: string, author: { __typename?: 'User', username: string }, likes: Array<{ __typename?: 'User', email: string, username: string, password: string, roles?: string | null }> }>, likes: Array<{ __typename?: 'User', email: string, username: string, password: string, roles?: string | null }> } | null> | null };

export type UserByUsernameQueryVariables = Exact<{
  username: Scalars['String']['input'];
}>;


export type UserByUsernameQuery = { __typename?: 'Query', userByUsername?: { __typename?: 'User', email: string, username: string, roles?: string | null } | null };

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = { __typename?: 'Query', allUsers: Array<{ __typename?: 'User', email: string, username: string, roles?: string | null } | null> };

export type GetProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfileQuery = { __typename?: 'Query', getProfile?: { __typename?: 'Profile', firstname?: string | null, lastname?: string | null, profilePic?: string | null, images?: Array<string | null> | null, bio?: string | null, user: { __typename?: 'User', email: string, username: string, password: string, roles?: string | null }, location?: { __typename?: 'Location', city: { __typename?: 'City', name: string }, provence: { __typename?: 'Provence', name: string }, country: { __typename?: 'Country', name: string } } | null, socials?: { __typename?: 'Socials', website?: string | null, github?: string | null, twitter?: string | null, instagram?: string | null, fb?: string | null } | null, followers?: Array<{ __typename?: 'User', username: string } | null> | null, messages?: Array<{ __typename?: 'DM', title?: string | null, text: string, images?: Array<string | null> | null, read: boolean, sender: { __typename?: 'User', username: string }, receiver: { __typename?: 'User', username: string } } | null> | null } | null };

export type GetProfileByUsernameQueryVariables = Exact<{
  username: Scalars['String']['input'];
}>;


export type GetProfileByUsernameQuery = { __typename?: 'Query', getProfileByUsername?: { __typename?: 'Profile', firstname?: string | null, lastname?: string | null, profilePic?: string | null, images?: Array<string | null> | null, bio?: string | null, user: { __typename?: 'User', email: string, username: string, password: string, roles?: string | null }, location?: { __typename?: 'Location', city: { __typename?: 'City', name: string }, provence: { __typename?: 'Provence', name: string }, country: { __typename?: 'Country', name: string } } | null, socials?: { __typename?: 'Socials', website?: string | null, github?: string | null, twitter?: string | null, instagram?: string | null, fb?: string | null } | null, followers?: Array<{ __typename?: 'User', username: string } | null> | null, messages?: Array<{ __typename?: 'DM', title?: string | null, text: string, images?: Array<string | null> | null, read: boolean, sender: { __typename?: 'User', username: string }, receiver: { __typename?: 'User', username: string } } | null> | null } | null };

export type GetDmQueryVariables = Exact<{
  title: Scalars['String']['input'];
}>;


export type GetDmQuery = { __typename?: 'Query', getDM: { __typename?: 'DM', title?: string | null, text: string, images?: Array<string | null> | null, read: boolean, sender: { __typename?: 'User', username: string }, receiver: { __typename?: 'User', username: string } } };

export type GetDmForUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDmForUserQuery = { __typename?: 'Query', getDmForUser?: Array<{ __typename?: 'DM', title?: string | null, text: string, images?: Array<string | null> | null, read: boolean, sender: { __typename?: 'User', username: string }, receiver: { __typename?: 'User', username: string } }> | null };

export type AllPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPostsQuery = { __typename?: 'Query', allPosts: Array<{ __typename?: 'Post', id: string, title: string, body: string, images?: Array<string | null> | null, author: { __typename?: 'User', username: string }, comments: Array<{ __typename?: 'Comment', text: string, author: { __typename?: 'User', username: string }, likes: Array<{ __typename?: 'User', email: string, username: string, password: string, roles?: string | null }> }>, likes: Array<{ __typename?: 'User', email: string, username: string, password: string, roles?: string | null }> } | null> };


export const LoginDocument = gql`
    mutation login($username: String!, $password: String!) {
  login(username: $username, password: $password)
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation register($email: String!, $username: String!, $password: String!) {
  register(
    input: {email: $email, username: $username, password: $password, roles: "ROLE_USER"}
  )
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const FollowDocument = gql`
    mutation follow($username: String!) {
  follow(username: $username) {
    firstname
    lastname
    profilePic
    images
    user {
      email
      username
      password
      roles
    }
    location {
      city {
        name
      }
      provence {
        name
      }
      country {
        name
      }
    }
    socials {
      website
      github
      twitter
      instagram
      fb
    }
    bio
    followers {
      username
    }
    messages {
      sender {
        username
      }
      receiver {
        username
      }
      title
      text
      images
      read
    }
  }
}
    `;
export type FollowMutationFn = Apollo.MutationFunction<FollowMutation, FollowMutationVariables>;

/**
 * __useFollowMutation__
 *
 * To run a mutation, you first call `useFollowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFollowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [followMutation, { data, loading, error }] = useFollowMutation({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useFollowMutation(baseOptions?: Apollo.MutationHookOptions<FollowMutation, FollowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FollowMutation, FollowMutationVariables>(FollowDocument, options);
      }
export type FollowMutationHookResult = ReturnType<typeof useFollowMutation>;
export type FollowMutationResult = Apollo.MutationResult<FollowMutation>;
export type FollowMutationOptions = Apollo.BaseMutationOptions<FollowMutation, FollowMutationVariables>;
export const AddPostDocument = gql`
    mutation addPost($title: String!, $body: String!, $images: [String]) {
  addPost(postIn: {title: $title, body: $body, images: $images}) {
    title
    body
    images
    author {
      username
    }
    comments {
      text
      author {
        username
      }
    }
  }
}
    `;
export type AddPostMutationFn = Apollo.MutationFunction<AddPostMutation, AddPostMutationVariables>;

/**
 * __useAddPostMutation__
 *
 * To run a mutation, you first call `useAddPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPostMutation, { data, loading, error }] = useAddPostMutation({
 *   variables: {
 *      title: // value for 'title'
 *      body: // value for 'body'
 *      images: // value for 'images'
 *   },
 * });
 */
export function useAddPostMutation(baseOptions?: Apollo.MutationHookOptions<AddPostMutation, AddPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddPostMutation, AddPostMutationVariables>(AddPostDocument, options);
      }
export type AddPostMutationHookResult = ReturnType<typeof useAddPostMutation>;
export type AddPostMutationResult = Apollo.MutationResult<AddPostMutation>;
export type AddPostMutationOptions = Apollo.BaseMutationOptions<AddPostMutation, AddPostMutationVariables>;
export const CreateProfileDocument = gql`
    mutation createProfile($firstname: String!, $lastname: String!, $profilePic: String, $images: [String], $location: [String], $socials: [String], $bio: String) {
  createProfile(
    profile: {firstname: $firstname, lastname: $lastname, profilePic: $profilePic, images: $images, location: $location, socials: $socials, bio: $bio}
  ) {
    firstname
    lastname
    profilePic
    images
    user {
      email
      username
      password
      roles
    }
    location {
      city {
        name
      }
      provence {
        name
      }
      country {
        name
      }
    }
    socials {
      website
      github
      twitter
      instagram
      fb
    }
    followers {
      username
    }
    messages {
      sender {
        username
      }
      receiver {
        username
      }
      title
      text
      images
      read
    }
    bio
  }
}
    `;
export type CreateProfileMutationFn = Apollo.MutationFunction<CreateProfileMutation, CreateProfileMutationVariables>;

/**
 * __useCreateProfileMutation__
 *
 * To run a mutation, you first call `useCreateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProfileMutation, { data, loading, error }] = useCreateProfileMutation({
 *   variables: {
 *      firstname: // value for 'firstname'
 *      lastname: // value for 'lastname'
 *      profilePic: // value for 'profilePic'
 *      images: // value for 'images'
 *      location: // value for 'location'
 *      socials: // value for 'socials'
 *      bio: // value for 'bio'
 *   },
 * });
 */
export function useCreateProfileMutation(baseOptions?: Apollo.MutationHookOptions<CreateProfileMutation, CreateProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProfileMutation, CreateProfileMutationVariables>(CreateProfileDocument, options);
      }
export type CreateProfileMutationHookResult = ReturnType<typeof useCreateProfileMutation>;
export type CreateProfileMutationResult = Apollo.MutationResult<CreateProfileMutation>;
export type CreateProfileMutationOptions = Apollo.BaseMutationOptions<CreateProfileMutation, CreateProfileMutationVariables>;
export const SendDmDocument = gql`
    mutation sendDm($title: String, $receiver: String!, $text: String!, $images: [String]) {
  sendDM(dm: {receiver: $receiver, title: $title, text: $text, images: $images}) {
    firstname
    lastname
    profilePic
    images
    user {
      email
      username
      password
      roles
    }
    location {
      city {
        name
      }
      provence {
        name
      }
      country {
        name
      }
    }
    socials {
      website
      github
      twitter
      instagram
      fb
    }
    followers {
      username
    }
    messages {
      sender {
        username
      }
      receiver {
        username
      }
      title
      text
      images
      read
    }
    bio
  }
}
    `;
export type SendDmMutationFn = Apollo.MutationFunction<SendDmMutation, SendDmMutationVariables>;

/**
 * __useSendDmMutation__
 *
 * To run a mutation, you first call `useSendDmMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendDmMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendDmMutation, { data, loading, error }] = useSendDmMutation({
 *   variables: {
 *      title: // value for 'title'
 *      receiver: // value for 'receiver'
 *      text: // value for 'text'
 *      images: // value for 'images'
 *   },
 * });
 */
export function useSendDmMutation(baseOptions?: Apollo.MutationHookOptions<SendDmMutation, SendDmMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendDmMutation, SendDmMutationVariables>(SendDmDocument, options);
      }
export type SendDmMutationHookResult = ReturnType<typeof useSendDmMutation>;
export type SendDmMutationResult = Apollo.MutationResult<SendDmMutation>;
export type SendDmMutationOptions = Apollo.BaseMutationOptions<SendDmMutation, SendDmMutationVariables>;
export const AddCommentDocument = gql`
    mutation addComment($text: String!, $postId: ID!) {
  addComment(commentIn: {text: $text, post: $postId}) {
    title
    author {
      username
    }
    comments {
      text
      author {
        username
      }
      likes {
        username
      }
    }
  }
}
    `;
export type AddCommentMutationFn = Apollo.MutationFunction<AddCommentMutation, AddCommentMutationVariables>;

/**
 * __useAddCommentMutation__
 *
 * To run a mutation, you first call `useAddCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCommentMutation, { data, loading, error }] = useAddCommentMutation({
 *   variables: {
 *      text: // value for 'text'
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useAddCommentMutation(baseOptions?: Apollo.MutationHookOptions<AddCommentMutation, AddCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCommentMutation, AddCommentMutationVariables>(AddCommentDocument, options);
      }
export type AddCommentMutationHookResult = ReturnType<typeof useAddCommentMutation>;
export type AddCommentMutationResult = Apollo.MutationResult<AddCommentMutation>;
export type AddCommentMutationOptions = Apollo.BaseMutationOptions<AddCommentMutation, AddCommentMutationVariables>;
export const DeleteCommentDocument = gql`
    mutation deleteComment($id: ID!) {
  deleteComment(id: $id)
}
    `;
export type DeleteCommentMutationFn = Apollo.MutationFunction<DeleteCommentMutation, DeleteCommentMutationVariables>;

/**
 * __useDeleteCommentMutation__
 *
 * To run a mutation, you first call `useDeleteCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCommentMutation, { data, loading, error }] = useDeleteCommentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCommentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCommentMutation, DeleteCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCommentMutation, DeleteCommentMutationVariables>(DeleteCommentDocument, options);
      }
export type DeleteCommentMutationHookResult = ReturnType<typeof useDeleteCommentMutation>;
export type DeleteCommentMutationResult = Apollo.MutationResult<DeleteCommentMutation>;
export type DeleteCommentMutationOptions = Apollo.BaseMutationOptions<DeleteCommentMutation, DeleteCommentMutationVariables>;
export const DeletePostDocument = gql`
    mutation deletePost($id: ID!) {
  deletePost(id: $id)
}
    `;
export type DeletePostMutationFn = Apollo.MutationFunction<DeletePostMutation, DeletePostMutationVariables>;

/**
 * __useDeletePostMutation__
 *
 * To run a mutation, you first call `useDeletePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostMutation, { data, loading, error }] = useDeletePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePostMutation(baseOptions?: Apollo.MutationHookOptions<DeletePostMutation, DeletePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePostMutation, DeletePostMutationVariables>(DeletePostDocument, options);
      }
export type DeletePostMutationHookResult = ReturnType<typeof useDeletePostMutation>;
export type DeletePostMutationResult = Apollo.MutationResult<DeletePostMutation>;
export type DeletePostMutationOptions = Apollo.BaseMutationOptions<DeletePostMutation, DeletePostMutationVariables>;
export const DeleteDmDocument = gql`
    mutation deleteDM($id: ID!) {
  deleteDM(id: $id)
}
    `;
export type DeleteDmMutationFn = Apollo.MutationFunction<DeleteDmMutation, DeleteDmMutationVariables>;

/**
 * __useDeleteDmMutation__
 *
 * To run a mutation, you first call `useDeleteDmMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDmMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDmMutation, { data, loading, error }] = useDeleteDmMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteDmMutation(baseOptions?: Apollo.MutationHookOptions<DeleteDmMutation, DeleteDmMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteDmMutation, DeleteDmMutationVariables>(DeleteDmDocument, options);
      }
export type DeleteDmMutationHookResult = ReturnType<typeof useDeleteDmMutation>;
export type DeleteDmMutationResult = Apollo.MutationResult<DeleteDmMutation>;
export type DeleteDmMutationOptions = Apollo.BaseMutationOptions<DeleteDmMutation, DeleteDmMutationVariables>;
export const DeleteUserDocument = gql`
    mutation deleteUser($id: ID!) {
  deleteUser(id: $id) {
    email
    username
    roles
  }
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const UnFollowDocument = gql`
    mutation unFollow($username: String!) {
  unFollow(username: $username) {
    firstname
    lastname
    profilePic
    images
    user {
      email
      username
      password
      roles
    }
    location {
      city {
        name
      }
      provence {
        name
      }
      country {
        name
      }
    }
    socials {
      website
      github
      twitter
      instagram
      fb
    }
    followers {
      username
    }
    messages {
      sender {
        username
      }
      receiver {
        username
      }
      title
      text
      images
      read
    }
    bio
  }
}
    `;
export type UnFollowMutationFn = Apollo.MutationFunction<UnFollowMutation, UnFollowMutationVariables>;

/**
 * __useUnFollowMutation__
 *
 * To run a mutation, you first call `useUnFollowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnFollowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unFollowMutation, { data, loading, error }] = useUnFollowMutation({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useUnFollowMutation(baseOptions?: Apollo.MutationHookOptions<UnFollowMutation, UnFollowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnFollowMutation, UnFollowMutationVariables>(UnFollowDocument, options);
      }
export type UnFollowMutationHookResult = ReturnType<typeof useUnFollowMutation>;
export type UnFollowMutationResult = Apollo.MutationResult<UnFollowMutation>;
export type UnFollowMutationOptions = Apollo.BaseMutationOptions<UnFollowMutation, UnFollowMutationVariables>;
export const LikeDocument = gql`
    mutation like($id: ID!) {
  like(id: $id) {
    title
    body
    images
    author {
      username
    }
    comments {
      text
      author {
        username
      }
      likes {
        email
        username
        password
        roles
      }
    }
    likes {
      email
      username
      password
      roles
    }
  }
}
    `;
export type LikeMutationFn = Apollo.MutationFunction<LikeMutation, LikeMutationVariables>;

/**
 * __useLikeMutation__
 *
 * To run a mutation, you first call `useLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeMutation, { data, loading, error }] = useLikeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLikeMutation(baseOptions?: Apollo.MutationHookOptions<LikeMutation, LikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LikeMutation, LikeMutationVariables>(LikeDocument, options);
      }
export type LikeMutationHookResult = ReturnType<typeof useLikeMutation>;
export type LikeMutationResult = Apollo.MutationResult<LikeMutation>;
export type LikeMutationOptions = Apollo.BaseMutationOptions<LikeMutation, LikeMutationVariables>;
export const UnLikeDocument = gql`
    mutation unLike($id: ID!) {
  unLike(id: $id) {
    title
    body
    images
    author {
      username
    }
    comments {
      text
      author {
        username
      }
      likes {
        email
        username
        password
        roles
      }
    }
    likes {
      email
      username
      password
      roles
    }
  }
}
    `;
export type UnLikeMutationFn = Apollo.MutationFunction<UnLikeMutation, UnLikeMutationVariables>;

/**
 * __useUnLikeMutation__
 *
 * To run a mutation, you first call `useUnLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unLikeMutation, { data, loading, error }] = useUnLikeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUnLikeMutation(baseOptions?: Apollo.MutationHookOptions<UnLikeMutation, UnLikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnLikeMutation, UnLikeMutationVariables>(UnLikeDocument, options);
      }
export type UnLikeMutationHookResult = ReturnType<typeof useUnLikeMutation>;
export type UnLikeMutationResult = Apollo.MutationResult<UnLikeMutation>;
export type UnLikeMutationOptions = Apollo.BaseMutationOptions<UnLikeMutation, UnLikeMutationVariables>;
export const HelloWorldDocument = gql`
    query helloWorld {
  helloWorld
}
    `;

/**
 * __useHelloWorldQuery__
 *
 * To run a query within a React component, call `useHelloWorldQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloWorldQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloWorldQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloWorldQuery(baseOptions?: Apollo.QueryHookOptions<HelloWorldQuery, HelloWorldQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HelloWorldQuery, HelloWorldQueryVariables>(HelloWorldDocument, options);
      }
export function useHelloWorldLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HelloWorldQuery, HelloWorldQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HelloWorldQuery, HelloWorldQueryVariables>(HelloWorldDocument, options);
        }
export function useHelloWorldSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<HelloWorldQuery, HelloWorldQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<HelloWorldQuery, HelloWorldQueryVariables>(HelloWorldDocument, options);
        }
export type HelloWorldQueryHookResult = ReturnType<typeof useHelloWorldQuery>;
export type HelloWorldLazyQueryHookResult = ReturnType<typeof useHelloWorldLazyQuery>;
export type HelloWorldSuspenseQueryHookResult = ReturnType<typeof useHelloWorldSuspenseQuery>;
export type HelloWorldQueryResult = Apollo.QueryResult<HelloWorldQuery, HelloWorldQueryVariables>;
export const PostsByUserDocument = gql`
    query postsByUser($author: String!) {
  postsForUser(author: $author) {
    id
    title
    body
    images
    author {
      username
    }
    comments {
      text
      author {
        username
      }
      likes {
        email
        username
        password
        roles
      }
    }
    likes {
      email
      username
      password
      roles
    }
  }
}
    `;

/**
 * __usePostsByUserQuery__
 *
 * To run a query within a React component, call `usePostsByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsByUserQuery({
 *   variables: {
 *      author: // value for 'author'
 *   },
 * });
 */
export function usePostsByUserQuery(baseOptions: Apollo.QueryHookOptions<PostsByUserQuery, PostsByUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostsByUserQuery, PostsByUserQueryVariables>(PostsByUserDocument, options);
      }
export function usePostsByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsByUserQuery, PostsByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostsByUserQuery, PostsByUserQueryVariables>(PostsByUserDocument, options);
        }
export function usePostsByUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<PostsByUserQuery, PostsByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PostsByUserQuery, PostsByUserQueryVariables>(PostsByUserDocument, options);
        }
export type PostsByUserQueryHookResult = ReturnType<typeof usePostsByUserQuery>;
export type PostsByUserLazyQueryHookResult = ReturnType<typeof usePostsByUserLazyQuery>;
export type PostsByUserSuspenseQueryHookResult = ReturnType<typeof usePostsByUserSuspenseQuery>;
export type PostsByUserQueryResult = Apollo.QueryResult<PostsByUserQuery, PostsByUserQueryVariables>;
export const UserByUsernameDocument = gql`
    query userByUsername($username: String!) {
  userByUsername(username: $username) {
    email
    username
    roles
  }
}
    `;

/**
 * __useUserByUsernameQuery__
 *
 * To run a query within a React component, call `useUserByUsernameQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserByUsernameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserByUsernameQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useUserByUsernameQuery(baseOptions: Apollo.QueryHookOptions<UserByUsernameQuery, UserByUsernameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserByUsernameQuery, UserByUsernameQueryVariables>(UserByUsernameDocument, options);
      }
export function useUserByUsernameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserByUsernameQuery, UserByUsernameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserByUsernameQuery, UserByUsernameQueryVariables>(UserByUsernameDocument, options);
        }
export function useUserByUsernameSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<UserByUsernameQuery, UserByUsernameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UserByUsernameQuery, UserByUsernameQueryVariables>(UserByUsernameDocument, options);
        }
export type UserByUsernameQueryHookResult = ReturnType<typeof useUserByUsernameQuery>;
export type UserByUsernameLazyQueryHookResult = ReturnType<typeof useUserByUsernameLazyQuery>;
export type UserByUsernameSuspenseQueryHookResult = ReturnType<typeof useUserByUsernameSuspenseQuery>;
export type UserByUsernameQueryResult = Apollo.QueryResult<UserByUsernameQuery, UserByUsernameQueryVariables>;
export const AllUsersDocument = gql`
    query allUsers {
  allUsers {
    email
    username
    roles
  }
}
    `;

/**
 * __useAllUsersQuery__
 *
 * To run a query within a React component, call `useAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
      }
export function useAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
        }
export function useAllUsersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
        }
export type AllUsersQueryHookResult = ReturnType<typeof useAllUsersQuery>;
export type AllUsersLazyQueryHookResult = ReturnType<typeof useAllUsersLazyQuery>;
export type AllUsersSuspenseQueryHookResult = ReturnType<typeof useAllUsersSuspenseQuery>;
export type AllUsersQueryResult = Apollo.QueryResult<AllUsersQuery, AllUsersQueryVariables>;
export const GetProfileDocument = gql`
    query getProfile {
  getProfile {
    firstname
    lastname
    profilePic
    images
    user {
      email
      username
      password
      roles
    }
    location {
      city {
        name
      }
      provence {
        name
      }
      country {
        name
      }
    }
    socials {
      website
      github
      twitter
      instagram
      fb
    }
    bio
    followers {
      username
    }
    messages {
      sender {
        username
      }
      receiver {
        username
      }
      title
      text
      images
      read
    }
  }
}
    `;

/**
 * __useGetProfileQuery__
 *
 * To run a query within a React component, call `useGetProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProfileQuery(baseOptions?: Apollo.QueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
      }
export function useGetProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
        }
export function useGetProfileSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
        }
export type GetProfileQueryHookResult = ReturnType<typeof useGetProfileQuery>;
export type GetProfileLazyQueryHookResult = ReturnType<typeof useGetProfileLazyQuery>;
export type GetProfileSuspenseQueryHookResult = ReturnType<typeof useGetProfileSuspenseQuery>;
export type GetProfileQueryResult = Apollo.QueryResult<GetProfileQuery, GetProfileQueryVariables>;
export const GetProfileByUsernameDocument = gql`
    query getProfileByUsername($username: String!) {
  getProfileByUsername(username: $username) {
    firstname
    lastname
    profilePic
    images
    user {
      email
      username
      password
      roles
    }
    location {
      city {
        name
      }
      provence {
        name
      }
      country {
        name
      }
    }
    socials {
      website
      github
      twitter
      instagram
      fb
    }
    bio
    followers {
      username
    }
    messages {
      sender {
        username
      }
      receiver {
        username
      }
      title
      text
      images
      read
    }
  }
}
    `;

/**
 * __useGetProfileByUsernameQuery__
 *
 * To run a query within a React component, call `useGetProfileByUsernameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileByUsernameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileByUsernameQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGetProfileByUsernameQuery(baseOptions: Apollo.QueryHookOptions<GetProfileByUsernameQuery, GetProfileByUsernameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfileByUsernameQuery, GetProfileByUsernameQueryVariables>(GetProfileByUsernameDocument, options);
      }
export function useGetProfileByUsernameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileByUsernameQuery, GetProfileByUsernameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfileByUsernameQuery, GetProfileByUsernameQueryVariables>(GetProfileByUsernameDocument, options);
        }
export function useGetProfileByUsernameSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetProfileByUsernameQuery, GetProfileByUsernameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProfileByUsernameQuery, GetProfileByUsernameQueryVariables>(GetProfileByUsernameDocument, options);
        }
export type GetProfileByUsernameQueryHookResult = ReturnType<typeof useGetProfileByUsernameQuery>;
export type GetProfileByUsernameLazyQueryHookResult = ReturnType<typeof useGetProfileByUsernameLazyQuery>;
export type GetProfileByUsernameSuspenseQueryHookResult = ReturnType<typeof useGetProfileByUsernameSuspenseQuery>;
export type GetProfileByUsernameQueryResult = Apollo.QueryResult<GetProfileByUsernameQuery, GetProfileByUsernameQueryVariables>;
export const GetDmDocument = gql`
    query getDM($title: String!) {
  getDM(title: $title) {
    sender {
      username
    }
    receiver {
      username
    }
    title
    text
    images
    read
  }
}
    `;

/**
 * __useGetDmQuery__
 *
 * To run a query within a React component, call `useGetDmQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDmQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDmQuery({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useGetDmQuery(baseOptions: Apollo.QueryHookOptions<GetDmQuery, GetDmQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDmQuery, GetDmQueryVariables>(GetDmDocument, options);
      }
export function useGetDmLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDmQuery, GetDmQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDmQuery, GetDmQueryVariables>(GetDmDocument, options);
        }
export function useGetDmSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetDmQuery, GetDmQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetDmQuery, GetDmQueryVariables>(GetDmDocument, options);
        }
export type GetDmQueryHookResult = ReturnType<typeof useGetDmQuery>;
export type GetDmLazyQueryHookResult = ReturnType<typeof useGetDmLazyQuery>;
export type GetDmSuspenseQueryHookResult = ReturnType<typeof useGetDmSuspenseQuery>;
export type GetDmQueryResult = Apollo.QueryResult<GetDmQuery, GetDmQueryVariables>;
export const GetDmForUserDocument = gql`
    query getDmForUser {
  getDmForUser {
    sender {
      username
    }
    receiver {
      username
    }
    title
    text
    images
    read
  }
}
    `;

/**
 * __useGetDmForUserQuery__
 *
 * To run a query within a React component, call `useGetDmForUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDmForUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDmForUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDmForUserQuery(baseOptions?: Apollo.QueryHookOptions<GetDmForUserQuery, GetDmForUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDmForUserQuery, GetDmForUserQueryVariables>(GetDmForUserDocument, options);
      }
export function useGetDmForUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDmForUserQuery, GetDmForUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDmForUserQuery, GetDmForUserQueryVariables>(GetDmForUserDocument, options);
        }
export function useGetDmForUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetDmForUserQuery, GetDmForUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetDmForUserQuery, GetDmForUserQueryVariables>(GetDmForUserDocument, options);
        }
export type GetDmForUserQueryHookResult = ReturnType<typeof useGetDmForUserQuery>;
export type GetDmForUserLazyQueryHookResult = ReturnType<typeof useGetDmForUserLazyQuery>;
export type GetDmForUserSuspenseQueryHookResult = ReturnType<typeof useGetDmForUserSuspenseQuery>;
export type GetDmForUserQueryResult = Apollo.QueryResult<GetDmForUserQuery, GetDmForUserQueryVariables>;
export const AllPostsDocument = gql`
    query allPosts {
  allPosts {
    id
    title
    body
    images
    author {
      username
    }
    comments {
      text
      author {
        username
      }
      likes {
        email
        username
        password
        roles
      }
    }
    likes {
      email
      username
      password
      roles
    }
  }
}
    `;

/**
 * __useAllPostsQuery__
 *
 * To run a query within a React component, call `useAllPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllPostsQuery(baseOptions?: Apollo.QueryHookOptions<AllPostsQuery, AllPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllPostsQuery, AllPostsQueryVariables>(AllPostsDocument, options);
      }
export function useAllPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllPostsQuery, AllPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllPostsQuery, AllPostsQueryVariables>(AllPostsDocument, options);
        }
export function useAllPostsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AllPostsQuery, AllPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AllPostsQuery, AllPostsQueryVariables>(AllPostsDocument, options);
        }
export type AllPostsQueryHookResult = ReturnType<typeof useAllPostsQuery>;
export type AllPostsLazyQueryHookResult = ReturnType<typeof useAllPostsLazyQuery>;
export type AllPostsSuspenseQueryHookResult = ReturnType<typeof useAllPostsSuspenseQuery>;
export type AllPostsQueryResult = Apollo.QueryResult<AllPostsQuery, AllPostsQueryVariables>;