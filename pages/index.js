import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Container from "../components/width-adapter";
import Layout from "../components/layout";
import Head from "next/head";

export default function Index() {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (inputValue === "") return;

    router.push(`/u/${inputValue}`);
  };

  return (
    <Layout>
      <Head>
        <title>Void</title>
      </Head>
      <div className="h-full flex flex-col items-center justify-center gap-5 font-courier">
        <h1 className="text-[#E9E7E7]">Void</h1>
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            name="new-post"
            type="text"
            className="w-full py-3 border-none bg-inherit focus:outline-none text-[8rem] text-[#FFEA63] text-center caret-custom-red"
          />
        </form>
        <p className="text-[#E9E7E7]">Choose a username and start micro-journaling.</p>
      </div>
    </Layout>
  );
}
