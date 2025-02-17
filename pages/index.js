import { useEffect, useState } from "react";
import Container from "../components/width-adapter";
import Layout from "../components/layout";
import Head from "next/head";

export default function Index() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (inputValue === "") return;

    window.location.href = `/u/${inputValue}`;
  };

  return (
    <Layout>
      <Head>
        <title>Void</title>
      </Head>
      <Container>
        <h1 className="w-full px-5 text-xl text-left bg-white">Void</h1>
        <form onSubmit={handleSubmit}>
          <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} name="new-post" type="text" placeholder="Username" className="w-full px-5 py-3 border-2 border-gray-400/50 bg-inherit focus:outline-none" />
        </form>
      </Container>
    </Layout>
  );
}
