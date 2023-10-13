import Container from "../components/container";
import LandingPage from "../components/landing-page";
import Layout from "../components/layout";
import Head from "next/head";

export default function Index({ preview, allPosts }) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>Softer Systems</title>
      </Head>
      <Container>
        <LandingPage />
      </Container>
    </Layout>
  );
}
