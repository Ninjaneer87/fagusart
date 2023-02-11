import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { createGalleryPhotos, GalleryImage } from "utils/constants/gallery";

export type GalleryProps = {
  photos: GalleryImage[]
}
const IndexPage = ({ photos }: GalleryProps) => {
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
      <Gallery photos={photos} />
      <Contact />
    </>
  )
}

export default IndexPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const photos = createGalleryPhotos();

  return {
    props: {
      photos: photos || []
    }
  }
}
