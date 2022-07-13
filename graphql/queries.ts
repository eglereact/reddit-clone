import { gql } from "@apollo/client";

export const GET_SUBREDDIT_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    getSubredditListByTopic(topic: $topic) {
      id
      topic
      created_at
    }
  }
`;

export const GET_ALL_POST = gql`
  query MyQuery {
    getPostList {
      body
      created_at
      id
      image
      title
      username
      subreddit_id
      comments {
        post_id
        text
        username
        id
        created_at
      }
      subreddit {
        created_at
        id
        topic
      }
      votes {
        created_at
        id
        post_id
        upvote
        username
      }
    }
  }
`;
