import { Feed } from "feed";
import { cyberkwinFeed } from "../../../../mock/feedContent";
// import type { NextApiRequest, NextApiResponse } from 'next'

async function generateRssFeed(id, allPosts) {
  const site_url = `softer.systems/rst/${id}`;

  const feedOptions = {
    title: `RST: ${id}`,
    description: "Real Simple Tweeter",
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
      title: "RST: cyberkwin",
      id: `${site_url}/${slug}`,
      link: `${site_url}/${slug}`,
      description: post.content,
      date: new Date(post.date),
    });
  });

  // Return the XML string.
  return feed.rss2();
}

export default async function handler(req, res) {
  const xml = await generateRssFeed("cyberkwin", cyberkwinFeed);

  res.setHeader("Content-Type", "application/xml");
  res.send(xml);
}
