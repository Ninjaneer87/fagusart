import { Container } from '@mui/material';
import { useSectionContext } from 'context/sectionContext';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import BlurIn from '../ui/BlurIn';
import { featuredProducts, otherProducts } from 'utils/constants';

const Products = () => {
  const { addSection, setInViewSection } = useSectionContext();
  const { ref: scrollRef } = useInView({
    rootMargin: "-50%",
    onChange: (inView, entry) => {
      inView && setInViewSection("products");
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
      <BlurIn className='heading' component='h2'>Najtraženiji proizvodi</BlurIn>

      <Container maxWidth={'xl'}>
        <ul className='grid grid-cols-[repeat(auto-fit,_minmax(280px,_380px))] justify-center gap-20 w-full mt-20'>
          {featuredProducts.map(({ id, img, label, text }) => (
            <BlurIn delay={id * 200} className='flex gap-8' key={id}>
              <img src={img} alt={label} width={60} height={60} />
              <div>
                <h3 className='mt-0 font-medium'>{label}</h3>
                <p className='font-extralight opacity-80'>{text}</p>
              </div>
            </BlurIn>
          ))}
        </ul>

        <BlurIn component='hr'></BlurIn>

        <BlurIn component='h2' className='text-start w-full font-normal'>Radimo još i:</BlurIn>
        <ul className='flex flex-wrap gap-5 mb-10'>
          {otherProducts.map((item, i) => (
            <BlurIn component='li' delay={(i + 1) * 150} key={item} className='p-4 rounded-lg bg-bg'>
              {item}
            </BlurIn>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default React.memo(Products);