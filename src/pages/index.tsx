import { type NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Header";
import EntriesPage from "./entries";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Journal</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <EntriesPage />
      </main>
    </>
  );
};

export default Home;