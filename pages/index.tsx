import { useEffect, useState, useRef, FormEvent } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "../components/layout";

export default function Index() {
  const [inputValue, setInputValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = async (event: FormEvent) => {
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
        <form onSubmit={handleSubmit} role="form">
          <label id="username-label" htmlFor="username-input" className="sr-only">Username</label>
          <input
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            id="username-input"
            name="username-input"
            type="text"
            className="w-full py-3 border-none bg-inherit focus:outline-none text-[8rem] text-[#FFEA63] text-center caret-custom-red"
            aria-describedby="username-help"
            aria-labelledby="username-label"
            role="textbox"
          />
        </form>
        <p id="username-help" className="text-sm text-[#E9E7E7]">
          Enter username to start micro-journaling.
        </p>
      </div>
    </Layout>
  );
}
