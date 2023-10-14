// import fs from "fs";
import { Feed } from "feed";

// const getStaticProps = (feed) => {
//   fs.writeFileSync("./public/rss.xml", feed.rss2());
// };

export default async function generateRssFeed(id, feedContent) {
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
      rss2: `${site_url}/atom`,
      json: `${site_url}/json`,
    },
  };

  const feed = new Feed(feedOptions);

  feedContent.forEach((post) => {
    const slug = post.content.split(" ").slice(0, 5).join("-");
    feed.addItem({
      //   title: post.title,
      id: `${site_url}/${slug}`,
      link: `${site_url}/${slug}`,
      description: post.content,
      date: new Date(post.date),
    });
  });

  // getStaticProps(feed);

  return feed.rss2();
}
