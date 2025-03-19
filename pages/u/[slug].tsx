import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";
import PostContainer from "../../components/post-container";
import WidthAdapter from "../../components/width-adapter";
import PostCreator from "../../components/post-creator";
import addDark from "../../public/icons/add-dark.svg";

interface Post {
  id: number;
  content: string;
  date: string;
}

export default function rstFeed() {
  const [username, setUsername] = useState<string>("");
  const [currentDateTime, setCurrentDateTime] = useState<Date | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [showPostCreator, setShowPostCreator] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchFeed();
  }, [router.query.slug]);

  useEffect(() => {
    const updateDateTime = () => {
      setCurrentDateTime(new Date());
    };

    updateDateTime();

    const now = new Date();
    const delay = 60000 - (now.getSeconds() * 1000 + now.getMilliseconds());

    const timeout = setTimeout(() => {
      updateDateTime();
      const interval = setInterval(updateDateTime, 60000);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, []);

  const fetchFeed = async () => {
    const slug = router.query.slug as string;
    if (!slug) return;
    const result = await fetch(`/api/rst/${slug}`).then((res) => res.json());
    setUsername(slug);
    setPosts(result.posts);
  };

  return (
    <Layout>
      <Head>
        <title>{username}</title>
        <link rel="alternate" type="application/rss+xml" href="https://softer.systems/api/rst/cyberkwin/rss" title="The RST of cyberkwin." />
      </Head>
      <WidthAdapter>
        <nav className="flex justify-between items-end gap-5 w-full h-[8rem] px-5 py-[1.5rem] text-[#E9E7E7]">
          <div className="flex gap-5">
            <Link href="/" passHref>
              Void
            </Link>
            <span className="">{">"}</span>
            <span className="">{username}</span>
          </div>
          <div>{currentDateTime ? currentDateTime.toLocaleDateString() + ", " + currentDateTime.toLocaleTimeString().slice(0, -3) : "Loading..."}</div>
        </nav>
      </WidthAdapter>

      {showPostCreator && <PostCreator setShowPostCreator={setShowPostCreator} fetchFeed={fetchFeed} username={username} />}

      <div className="flex flex-col w-full h-full bg-[#CACACA]">
        <div className={`flex justify-center items-center w-full h-[70px] focus:outline-none bg-[#CACACA] border-b border-[#6E6E6E] flex-shrink-0 ${isHovered === "add" ? " bg-[#FFEA63] border-[#CACACA] " : ""}`}>
          <button onClick={() => setShowPostCreator(true)} onMouseEnter={() => setIsHovered("add")} onMouseLeave={() => setIsHovered(null)} className="h-fit hover:text-gray-500/80 cursor-pointer">
            <Image src={addDark} alt="My SVG Image" width={30} height={30} />
          </button>
        </div>
        {posts && posts.map((post, i) => <PostContainer post={post} key={i} />)}
      </div>
    </Layout>
  );
}
