import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Container from "../../components/container";
import Layout from "../../components/layout";

export default function rstFeed() {
  const [username, setUsername] = useState("");
  const [posts, setPosts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetchFeed();
  }, [router.query.slug]);

  const fetchFeed = async () => {
    const slug = router.query.slug;
    if (!slug) return;
    const result = await fetch(`/api/rst/${slug}`).then((res) => res.json());
    setUsername(slug);
    setPosts(result.posts);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (inputValue === "") return;

    const result = await fetch(`/api/rst/post?username=${username}&content=${inputValue}`);
    console.log("TEST result", result);
    if (result.ok) {
      fetchFeed();
      setInputValue("");
    }
  };

  return (
    <Layout>
      <Head>
        <title>{username}</title>
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
          <h1 className="text-xl">RST{username && `/${username}`}</h1>

          <a href="/api/rst/cyberkwin/rss" className=" text-gray-500 opacity-50 hover:opacity-70 duration-200 transition-colors">
            RSS
          </a>
        </div>
        <form onSubmit={handleSubmit}>
          <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} name="new-post" type="text" placeholder="New" className="w-full px-5 py-3 border-2 border-gray-400/50 bg-inherit" />
        </form>
        <div className="flex flex-col justify-between">
          {posts.map((post) => (
            <div className="w-full flex flex-col gap-3 p-5 border-b-2 border-gray-400/60">
              <p>{post.content}</p>
              <div className="w-full flex justify-between text-gray-500/50">
                <a href={`rst/${post.username}`} className="hover:text-gray-500/80">
                  {post.username}
                </a>
                <p>{new Date(Number(post.date)).toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
}
