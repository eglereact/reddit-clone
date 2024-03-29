import { useQuery } from "@apollo/client";
import type { NextPage } from "next";
import Head from "next/head";
import Feed from "../components/Feed";
import PostBox from "../components/PostBox";
import SubredditRow from "../components/SubredditRow";
import { GET_SUBBREDITS_WITH_LIMIT } from "../graphql/queries";

const Home: NextPage = () => {
  const { data } = useQuery(GET_SUBBREDITS_WITH_LIMIT, {
    variables: {
      limit: 10,
    },
  });

  const subreddits: Subreddit[] = data?.getSubredditListLimit;

  return (
    <div className="my-7 max-w-5xl mx-auto">
      <Head>
        <title>Tidder - Reddit Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* PostBox */}
      <PostBox />
      <div className="flex">
        <Feed />
        <div
          className="sticy top-36 mx-5 mt-5 hidden h-fit min-w-[300px]
        rounded-md border border-gray-300 bg-white lg:inline"
        >
          <p className="text-md mb-1 p-4 pb-3 font-bold">Top Communities</p>
          <div>
            {subreddits?.map((subreddit, index) => (
              <SubredditRow
                key={subreddit.id}
                topic={subreddit.topic}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
