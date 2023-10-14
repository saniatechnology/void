import { useEffect, useState } from "react";
import Container from "../../../components/container";
import Layout from "../../../components/layout";
import Head from "next/head";
import { feedContent } from "../../../mock/feedContent";
import generateRssFeed from "../../../lib/generateRSSFeed";

export default function Personal({ preview, allPosts }) {
  // const [feed, setFeed] = useState(null);

  // useEffect(() => {
  //   async function fetchFeed() {
  //     const xml = await generateRssFeed("cyberkwin", feedContent);
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
        <section className="md:w-[50%] my-20 py-10 px-5 sm:px-10 flex flex-col justify-between gap-5 text-left font-courier">
          <h1 className="w-full px-5 text-xl text-left bg-white">cyberkwin</h1>
          <div className="flex flex-col justify-between">
            {feedContent.map((post) => (
              <div className="w-full flex flex-col gap-3 p-5 border-b-2 border-gray-400/50">
                <p>{post.content}</p>
                <div className="w-full flex justify-between text-gray-500">
                  <p>{post.author}</p>
                  <p>{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </Layout>
  );
}
