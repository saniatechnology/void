import Container from "../../../components/container";
import Layout from "../../../components/layout";
import Head from "next/head";

const feedContent = [
  {
    date: "01/02/2023",
    author: "cyberkwin",
    content: "post 1",
  },
  {
    date: "02/02/2023",
    author: "cyberkwin",
    content: "post 2",
  },
  {
    date: "03/02/2023",
    author: "cyberkwin",
    content: "post 3",
  },
];

export default function Personal({ preview, allPosts }) {
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
              <div className="w-full flex flex-col gap-3 p-5 border-b-2">
                <p>{post.content}</p>
                <div className="w-full flex justify-between">
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
