import Container from "../../components/container";
import Layout from "../../components/layout";
import Head from "next/head";

export default function Personal({ preview, allPosts }) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>Really Simple Tweeter</title>
      </Head>
      <Container>
        <section className="md:w-[50%] my-20 py-10 px-5 sm:px-10 flex flex-col justify-between gap-5 text-left font-courier">
          <h1 className="w-full px-5 text-xl text-left bg-white">Really Simple Tweeter (RST)</h1>
          <h2 className="w-full px-5">is a social software based on RSS.</h2>
        </section>
      </Container>
    </Layout>
  );
}
