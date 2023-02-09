import { Container } from '@mui/material';
import { useSectionContext } from 'context/sectionContext';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import BlurIn from '../ui/BlurIn';
import { featuredProducts, otherProducts } from 'utils/constants';

const Products = () => {
  const { isScrolling, addSection, setInViewSection } = useSectionContext();
  const { ref: scrollRef } = useInView({
    rootMargin: "-50%",
    onChange: (inView, entry) => {
      inView && !isScrolling && setInViewSection("products");
      entry && addSection("products", entry.target);
    },
  });

  return (
    <section className="
        py-[10vw] relative  flex flex-col items-center justify-center md:px-4 z-[0]
        bg-cover bg-no-repeat bg-center lg:bg-fixed bg-[url('/images/bg/2.webp')]
        before:content-[''] before:absolute before:inset-0 before:z-[-1] before:bg-black/80 
      "
      ref={scrollRef}
    >
      <BlurIn className='heading' component='h2'>Pravimo po meri</BlurIn>

      <Container maxWidth={'xl'}>
        <ul className='grid grid-cols-[repeat(auto-fit,_minmax(280px,_380px))] justify-center gap-20 w-full mt-20'>
          {featuredProducts.map(({ id, img, label }) => (
            <BlurIn component='li' delay={id * 40} className='flex gap-8 items-center' key={id}>
              <img src={img} alt={label} width={60} height={60} />
              <h3 className='m-0 font-medium'>{label}</h3>
            </BlurIn>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default React.memo(Products);