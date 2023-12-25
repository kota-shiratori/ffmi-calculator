import Head from "next/head";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import dynamic from "next/dynamic";

const FFMIForm = dynamic(() => import("@/components/FFMIForm"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/wsc.png" />
      </Head>
      <Header />
      <FFMIForm />
      <Footer />
    </>
  );
}
