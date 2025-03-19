import { useEffect, useState } from "react";
import Layout from "../components/layout";
import Head from "next/head";
import PostContainer from "../components/post-container";
import { Post } from "../types/post";

export default function Everything() {
  const [posts, setPosts] = useState<Post[]>([]);

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
      <h1 className="w-full px-5 text-xl text-left bg-white">Void/everything</h1>
      <div className="flex flex-col justify-between">
        {posts.map((post) => (
          <PostContainer key={post.id} post={post} />
        ))}
      </div>
    </Layout>
  );
}
