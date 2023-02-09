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
        <title>Fagus Art | Zaljubi se u svoj enterijer</title>
        <meta 
          name="description" 
          content="Od modernih dizajnova do tradicionalnih stilova, mi smo tu da ispunimo sve vaše želje. Izrada nameštaja prema vašim željama i potrebama." 
        />
        <link
          rel="canonical"
          href="https://fagusart.vercel.app/"
          key="canonical"
        />
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
