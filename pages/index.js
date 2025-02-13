import { useEffect, useState } from "react";
import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import PostContainer from "../components/post-container";

export default function Index() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchFeed();
  }, []);

  const fetchFeed = async () => {
    const result = await fetch("/api/rst/latest").then((res) => res.json());
    setPosts(result.posts);
  };

  return (
    <Layout>
      <Head>
        <title>Void</title>
      </Head>
      <Container>
        <h1 className="w-full px-5 text-xl text-left bg-white">Void</h1>
        <h2 className="w-full px-5">is a micro-journaling software based on RSS.</h2>
        <h3 className="w-full px-5 text-left">Example posts on Void:</h3>
        <div className="flex flex-col justify-between">
          {posts.map((post) => (
            <PostContainer post={post} />
          ))}
        </div>
      </Container>
    </Layout>
  );
}
