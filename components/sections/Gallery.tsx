import React, { useState, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import { useSectionContext } from "context/sectionContext";
import Triangle from "../ui/Triangle";
import BlurIn from "../ui/BlurIn";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { GalleryProps } from "@/pages/index";
import { Button } from "@mui/material";


function Gallery({ photos }: GalleryProps) {
  const { isScrolling, addSection, setInViewSection } = useSectionContext();
  const { ref: scrollRef } = useInView({
    rootMargin: "-50%",
    onChange: (inView, entry) => {
      inView && !isScrolling && setInViewSection("gallery");
      entry && addSection("gallery", entry.target);
    },
  });
  const [index, setIndex] = useState(-1);
  const [visibleImagesLength, setVisibleImagesLength] = useState(70);

  const images = useMemo(() => photos.slice(0, visibleImagesLength), [photos, visibleImagesLength])

  const slides = useMemo(() => images.map(({ src, width, height, images }) => ({
    src,
    width,
    height,
    srcSet: images.map((image) => ({
      src: image.src,
      width: image.width,
      height: image.height,
    })),
  })), [images]);

  return (
    <section
      ref={scrollRef}
      className='relative py-10 z-[1]'
    >
      <Triangle position='top-ascending' />

      <BlurIn className='heading mb-20 mt-0' component='h2'>Naš album</BlurIn>

      <PhotoAlbum
        photos={images}
        layout="rows"
        targetRowHeight={150}
        onClick={({ index }) => setIndex(index)}
        spacing={4}
      //   columns={(containerWidth) => {
      //     if (containerWidth < 400) return 3;
      //     if (containerWidth < 800) return 4;
      //     if (containerWidth < 1200) return 7;
      //     if (containerWidth < 1400) return 10;
      //     return 15;
      // }}
        rowConstraints={{ maxPhotos: 15 }}
        
        componentsProps={() => ({
          imageProps: { loading: "eager" },
        })}
      />

      {
        photos.length > visibleImagesLength
          ? <Button onClick={() => setVisibleImagesLength(prev => prev + 10)}>Učitaj jos slika...</Button>
          : null
      }

      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)", } }}
        controller={{ closeOnBackdropClick: true }}
        carousel={{ finite: true }}
        plugins={[Zoom]}
      />

      <Triangle position='bottom-ascending' />
    </section>
  );
}
export default React.memo(Gallery)