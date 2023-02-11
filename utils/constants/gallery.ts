import sizeOf from "image-size";

const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

export type GalleryImage = {
  src: string;
  width: number;
  height: number;
  images: {
      src: string;
      width: number;
      height: number;
  }[];
};

export const createGalleryPhotos = () => {
  const imageObjects = [...Array(70)].map((_n, i) => {
    const src = `${process.env.NODE_ENV === 'development' ? 'public' : 'https://www.fagusart.com'}/images/gallery/${i + 1}.webp`;
    const { width, height } = sizeOf(src);
    return {
      src,
      width,
      height,
    };
  });

  const photos = imageObjects.map((photo, i) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;
    const src = `images/gallery/${i + 1}.webp`;

    return {
      src,
      width,
      height,
      images: breakpoints.map((breakpoint) => {
        const height = Math.round((photo.height / photo.width) * breakpoint);

        return {
          src,
          width: breakpoint,
          height,
        };
      }),
    };
  });

  return photos;
};