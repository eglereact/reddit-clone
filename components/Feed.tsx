import { useQuery } from "@apollo/client";
import { GET_ALL_POST } from "../graphql/queries";
import Post from "./Post";

function Feed() {
  const { data, error } = useQuery(GET_ALL_POST);
  const posts: Post[] = data?.getPostList;

  console.log(error);
  return (
    <div className="mt-5 space-y-4">
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;
