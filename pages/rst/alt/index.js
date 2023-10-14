import { useEffect, useState } from "react";
import Container from "../../../components/container";
import Layout from "../../../components/layout";
import Head from "next/head";
import { altFeed } from "../../../mock/feedContent";
// import generateRssFeed from "../../../lib/generateRSSFeed";

export default function Personal({ preview, allPosts }) {
  // const [feed, setFeed] = useState(null);

  // useEffect(() => {
  //   async function fetchFeed() {
  //     const xml = await generateRssFeed("cyberkwin", altFeed);
  //     console.log("TEST xml", xml);

  //     // setFeed(data);
  //   }

  //   fetchFeed();
  // }, []);

  return (
    <Layout preview={preview}>
      <Head>
        <title>Tweeter Feed: cyberkwin</title>
      </Head>
      <Container>
        <nav className="flex gap-5 px-5">
          <a href="/" className="text-gray-500 opacity-50 hover:opacity-70 duration-200 transition-colors">
            Softer Systems
          </a>
          <span className="text-gray-500 opacity-50">{">"}</span>
          <a href="/rst" className="text-gray-500 opacity-50 hover:opacity-70 duration-200 transition-colors">
            RST
          </a>
          <span className="text-gray-500 opacity-50">{">"}</span>
        </nav>
        <h1 className="w-full px-5 text-xl text-left bg-white">cyberkwin</h1>
        <div className="flex flex-col justify-between">
          {altFeed.map((post) => (
            <div className="w-full flex flex-col gap-3 p-5 border-b-2 border-gray-400/50">
              <p>{post.content}</p>
              <div className="w-full flex justify-between text-gray-500">
                <p>{post.author}</p>
                <p>{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
}
