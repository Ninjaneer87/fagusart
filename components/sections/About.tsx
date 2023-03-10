import { Container } from '@mui/system';
import { useSectionContext } from 'context/sectionContext';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ABOUT_ITEMS } from 'utils/constants/about';
import BlurIn from 'components/ui/BlurIn';
import Triangle from 'components/ui/Triangle';

const About = () => {
  const { isScrolling, addSection, setInViewSection } = useSectionContext();
  const { ref: scrollRef } = useInView({
    rootMargin: "-50%",
    onChange: (inView, entry) => {
      inView && !isScrolling && setInViewSection("about");
      entry && addSection("about", entry.target);
    },
  });
  return (
    <section
      className="
        flex flex-col text-center items-center justify-center min-h-full relative z-[1] py-4
      "
      ref={scrollRef}
    >
      <Triangle position='top-ascending' />

      <Container
        component="section"
        maxWidth="xl"
        className='lg:px-5'
      >
        <BlurIn className='heading pt-10' component='h2'>Ko smo mi</BlurIn>

        <ul className='flex flex-wrap items-center justify-around gap-8 mt-20'>
          {ABOUT_ITEMS.map(({ id, icon, desc }, i) => (
            <BlurIn delay={(i + 1) * 200} component='li' key={id} className="gradient-wrapper w-full max-w-[430px]">
              <div className='bg-glass rounded-2xl p-4 sm:p-8 text-start'>
                <div className="h-[150px] flex items-center justify-center">
                  <span className='scale-[1.5]'>{icon}</span>
                </div>
                <div className="min-h-[200px] flex items-start justify-center">
                  {desc}
                </div>
              </div>
            </BlurIn>
          ))}
        </ul>
      </Container>
      
      <Triangle position='bottom-ascending' />
    </section>
  );
};

export default React.memo(About);