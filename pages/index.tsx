import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Slider from "../components/Slider/Slider";
import { SliderData } from "../components/Slider/SliderData";
import Instagram from "../components/InstagramGallery/Instagram";
import Portfolio from "../components/Portfolio/Portfolio";
import Contact from "../components/Contact/Contact";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Keep moving</title>
        <meta
          name=""
          content=""
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading="Let's go jogging" message="Find your road" />
      <Slider slides={SliderData} />
      <Instagram />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Home;
