import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import PostBox from "../components/PostBox";

const Home: NextPage = () => {
  return (
    <div className="my-7 max-w-5xl mx-auto">
      <Head>
        <title>Tidder - Reddit Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* PostBox */}
      <PostBox />
    </div>
  );
};

export default Home;
