import { useEffect, useState } from "react";
import { cyberkwinFeed } from "../../../mock/feedContent";
import Head from "next/head";
import Container from "../../../components/container";
import Layout from "../../../components/layout";

export default function rstFeed() {
  const [feed, setFeed] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    async function fetchFeed() {
      const allPosts = cyberkwinFeed;
      setFeed(allPosts);
    }

    fetchFeed();
  }, []);

  useEffect(() => {
    console.log("TEST feed", feed);
  }, [feed]);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior.

    if (inputValue === "") return;

    const newPost = {
      content: inputValue,
      date: new Date().toLocaleDateString(),
      author: "cyberkwin",
    };

    setFeed((prev) => [newPost, ...prev]);
    setInputValue("");
  };

  return (
    <Layout>
      <Head>
        <title>cyberkwin</title>
        <link rel="alternate" type="application/rss+xml" href="https://softer.systems/api/rst/cyberkwin/rss" title="The RST of cyberkwin." />
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
        <div className="flex justify-between items-center w-full px-5 bg-white">
          <h1 className="text-xl">RST: cyberkwin</h1>

          <a href="/api/rst/cyberkwin/rss" className=" text-gray-500 opacity-50 hover:opacity-70 duration-200 transition-colors">
            RSS
          </a>
        </div>
        <form onSubmit={handleSubmit}>
          <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} name="new-post" type="text" placeholder="New" className="w-full px-5 py-3 border-2 border-gray-400/50 bg-inherit" />
        </form>
        <div className="flex flex-col justify-between">
          {feed.map((post) => (
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
