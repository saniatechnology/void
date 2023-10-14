import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";

export default function Personal() {
  return (
    <Layout>
      <Head>
        <title>Sania Garcia</title>
      </Head>
      <Container>
        <section className="md:w-[50%] my-20 py-10 px-5 sm:px-10 flex flex-col justify-between gap-5 text-left font-courier">
          <h1 className="w-full px-5 text-xl text-left bg-white">Sania García</h1>
          <h2 className="w-full px-5">is a software developer based in Barcelona.</h2>
          <h3 className="w-full px-5 text-left">Links:</h3>
          <div className="flex flex-row gap-10 flex-wrap w-full px-5">
            <a href="https://www.linkedin.com/in/sania-garcia/" target="_blank" className="underline opacity-50 hover:opacity-70 duration-200 transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/saniagarciadev" target="_blank" className="underline opacity-50 hover:opacity-70 duration-200 transition-colors">
              Github
            </a>
            <a href="https://www.lensfrens.xyz/sania.lens" target="_blank" className="underline opacity-50 hover:opacity-70 duration-200 transition-colors">
              Lens
            </a>
            <a href="https://twitter.com/SaniaGarciaDev" target="_blank" className="underline opacity-50 hover:opacity-70 duration-200 transition-colors">
              X
            </a>
            <a href="mailto:sania@softer.systems" target="_blank" className="underline opacity-50 hover:opacity-70 duration-200 transition-colors">
              E-mail
            </a>
          </div>
          <div className="flex flex-col justify-between gap-5 px-5">
            <h3 className="w-full text-left">About:</h3>
            <p className="lg:columns-2 gap-10">
              After a few years in tech-adjacent jobs such as graphic design and social media management, in 2019 I decided that I would stop dreaming about building software myself and finally go for it. Then in 2020 I turned lemons (lockdown life)
              into lemonade by studying full-time until I was able to make the jump, and now I do this professionally and keep devouring as much information as I can about technology and the Internet.
            </p>
          </div>
        </section>
      </Container>
    </Layout>
  );
}
