import Container from "../../components/container";
import Layout from "../../components/layout";
import Head from "next/head";

export default function Personal() {
  return (
    <Layout>
      <Head>
        <title>RST (Really Simple Tweeter)</title>
      </Head>
      <Container>
        <nav className="flex gap-5 px-5">
          <a href="/" className="text-gray-500 opacity-50 hover:opacity-70 duration-200 transition-colors">
            Softer Systems
          </a>
          <span className="text-gray-500 opacity-50">{">"}</span>{" "}
        </nav>
        <h1 className="w-full px-5 text-xl text-left bg-white">RST (Really Simple Tweeter)</h1>
        <h2 className="w-full px-5">is a social software based on RSS.</h2>
        <h3 className="w-full px-5 text-left">Public feeds:</h3>
        <div className="flex flex-row gap-10 flex-wrap w-full px-5">
          <a href="/rst/cyberkwin" className="underline opacity-50 hover:opacity-70 duration-200 transition-colors">
            cyberkwin
          </a>
        </div>
      </Container>
    </Layout>
  );
}
