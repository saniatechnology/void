import fs from "fs";
import { Feed } from "feed";
import Container from "../../../components/container";
import Layout from "../../../components/layout";
import Head from "next/head";
import { cyberkwinFeed } from "../../../mock/feedContent";

async function generateRssFeed(id, allPosts) {
  const site_url = `localhost:3000/rst/${id}`;

  const feedOptions = {
    title: `RST: ${id}`,
    description: "Welcome to this blog posts!",
    id: site_url,
    link: site_url,
    //  image: `${site_url}/logo.png`,
    //  favicon: `${site_url}/favicon.png`,
    //  copyright: `All rights reserved ${new Date().getFullYear()}, Ibas`,
    //  generator: 'Feed for Node.js',
    feedLinks: {
      rss2: `${site_url}/rss`,
      // rss2: `${site_url}/atom`,
      // json: `${site_url}/json`,
    },
  };

  const feed = new Feed(feedOptions);

  allPosts.forEach((post) => {
    const slug = post.content.split(" ").slice(0, 5).join("-");
    feed.addItem({
      //   title: post.title,
      id: `${site_url}/${slug}`,
      link: `${site_url}/${slug}`,
      description: post.content,
      date: new Date(post.date),
    });
  });

  // Return the XML string.
  return feed.rss2();
}

export const getServerSideProps = async () => {
  const xml = await generateRssFeed("cyberkwin", cyberkwinFeed);
  // console.log("TEST xml", xml);
  const dir = "./public/RST/cyberkwin/";
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(dir + "rss.xml", xml);

  return {
    props: {
      allPosts: cyberkwinFeed,
    },
  };
};

export default function Personal({ allPosts }) {
  // const [feed, setFeed] = useState(null);

  // useEffect(() => {
  //   async function fetchFeed() {
  //     const xml = await generateRssFeed("cyberkwin", cyberkwinFeed);
  //     console.log("TEST xml", xml);

  //     // setFeed(data);
  //   }

  //   fetchFeed();
  // }, []);

  return (
    <Layout>
      <Head>
        <title>RST: cyberkwin</title>
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

          <a href="/RST/cyberkwin/rss.xml" className=" text-gray-500 opacity-50 hover:opacity-70 duration-200 transition-colors">
            RSS
          </a>
        </div>

        <div className="flex flex-col justify-between">
          {allPosts.map((post) => (
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
