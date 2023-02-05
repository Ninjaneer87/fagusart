import { Container } from '@mui/material';
import { useSectionContext } from 'context/sectionContext';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import BlurIn from '../ui/BlurIn';
import ContactInfo from './ContactInfo';
import ContactMessage from './ContactMessage';

const Contact = () => {
  const { addSection, setInViewSection } = useSectionContext();
  const { ref: scrollRef } = useInView({
    rootMargin: "-50%",
    onChange: (inView, entry) => {
      inView && setInViewSection("contact");
      entry && addSection("contact", entry.target);
    },
  });

  return (
    <section className="
        py-[10vw] relative flex flex-col items-center justify-center z-[0]
        bg-cover bg-no-repeat bg-center lg:bg-fixed bg-[url('/images/bg/3.webp')]
        before:content-[''] before:absolute before:inset-0 before:z-[-1] before:bg-black/80 
      "
      ref={scrollRef}
    >
      <BlurIn className='heading' component='h2'>Kontaktirajte nas</BlurIn>

      <Container maxWidth='lg' className="grid grid-cols-[1fr] lg:grid-cols-[1fr,_1fr] gap-20 my-20">
        <ContactInfo />
        <ContactMessage />
      </Container>
    </section>
  );
};

export default React.memo(Contact);