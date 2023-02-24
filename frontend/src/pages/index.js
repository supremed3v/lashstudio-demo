import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Work from "@/components/Work";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto">
      <Head>
        <title>WS Lash Studio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Testimonial />
      <Work />
      <Services />
      <CTA />
    </div>
  );
}