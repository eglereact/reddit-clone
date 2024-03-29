import { useQuery } from "@apollo/client";
import { DotSpinner } from "@uiball/loaders";
import { GET_ALL_POST, GET_ALL_POST_BY_TOPIC } from "../graphql/queries";
import Post from "./Post";

type Props = {
  topic?: string;
};

function Feed({ topic }: Props) {
  const { data, error } = !topic
    ? useQuery(GET_ALL_POST)
    : useQuery(GET_ALL_POST_BY_TOPIC, { variables: { topic: topic } });
  const posts: Post[] = !topic ? data?.getPostList : data?.getPostListByTopic;

  if (!posts) {
    return (
      <div className="w-full flex items-center justify-center p-10 text-xl">
        <DotSpinner size={50} color="#ff4501" />
      </div>
    );
  }

  return (
    <div className="mt-5 space-y-4">
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;
