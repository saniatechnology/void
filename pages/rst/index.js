import { useEffect, useState } from "react";
import Container from "../../components/container";
import Layout from "../../components/layout";
import Head from "next/head";
import PostContainer from "../../components/post-container";

export default function Personal() {
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
        <title>RST (Really Simple Tweeter)</title>
      </Head>
      <Container>
        <nav className="flex gap-5 px-5">
          <a href="/" className="text-gray-500 opacity-50 hover:opacity-70 duration-200 transition-colors">
            Softer Systems
          </a>
          <span className="text-gray-500 opacity-50">{">"}</span>{" "}
        </nav>
        <h1 className="w-full px-5 text-xl text-left bg-white">RST (Really Simple Tweeter)</h1>
        <h2 className="w-full px-5">is a social software based on RSS.</h2>
        <h3 className="w-full px-5 text-left">Latest public tweets on RST:</h3>
        <div className="flex flex-col justify-between">
          {posts.map((post) => (
            <PostContainer post={post} />
          ))}
        </div>
      </Container>
    </Layout>
  );
}
