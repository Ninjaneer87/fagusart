import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import Head from "next/head";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>FagusArt</title>
      </Head>
      <Hero />
      <About />
      <Products />
      <Gallery />
      <Contact />
    </>
  )
}

export default IndexPage
