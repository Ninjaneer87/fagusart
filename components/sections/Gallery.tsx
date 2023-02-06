import React, { useState, useCallback } from "react";
import { photos } from "utils/constants";
import { useInView } from "react-intersection-observer";
import { useSectionContext } from "context/sectionContext";
import Triangle from "../ui/Triangle";
import BlurIn from "../ui/BlurIn";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const slides = photos.map(({ src, width, height, images }) => ({
  src,
  width,
  height,
  srcSet: images.map((image) => ({
    src: image.src,
    width: image.width,
    height: image.height,
  })),
}));

function Gallery() {
  const { isScrolling, addSection, setInViewSection } = useSectionContext();
  const { ref: scrollRef } = useInView({
    rootMargin: "-50%",
    onChange: (inView, entry) => {
      inView && !isScrolling && setInViewSection("gallery");
      entry && addSection("gallery", entry.target);
    },
  });
  const [index, setIndex] = useState(-1);

  return (
    <section 
      ref={scrollRef} 
      className='relative py-10 z-[1]'
    >
      <Triangle position='top-ascending' />

      <BlurIn className='heading mb-20 mt-0' component='h2'>Naš album</BlurIn>

      <BlurIn>
        <PhotoAlbum
          photos={photos}
          layout="rows"
          targetRowHeight={150}
          onClick={({ index }) => setIndex(index)}
          spacing={4}
          rowConstraints={{ maxPhotos: 8 }}
        />
      </BlurIn>

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