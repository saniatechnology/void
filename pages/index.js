import Container from "../components/container";
import LandingPage from "../components/landing-page";
import Layout from "../components/layout";
import Head from "next/head";

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Softer Systems</title>
      </Head>
      <Container>
        <LandingPage />
      </Container>
    </Layout>
  );
}
