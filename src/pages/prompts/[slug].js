import Card2 from "@/components/Card2";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { prompts } from "@/data/prompts";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

export default function Prompts() {
  const { isReady, query } = useRouter();
  let card;
  if (isReady) {
    if (parseInt(query.slug) > 0 && parseInt(query.slug) <= prompts.length) {
      let data = prompts[parseInt(query.slug) - 1];
      console.log(data);
      card = (
        <Card2
          index={data.index}
          act={data.act}
          prompt={data.prompt}
          fullSize
        />
      );
    }
  }
  return (
    <>
      <Head>
        <title>Lit Prompts : Best AI prompts 🔥</title>
      </Head>
      <main className="z-10 relative flex flex-col items-center">
        <Header />
        <div>{isReady && card}</div>
        <Footer />
      </main>
    </>
  );
}
