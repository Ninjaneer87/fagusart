import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSectionContext } from 'context/sectionContext';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import BlurIn from '../ui/BlurIn';

const Hero = () => {
  const { addSection, setInViewSection, scrollToSection } = useSectionContext();
  const { ref: scrollRef } = useInView({
    rootMargin: "-50%",
    onChange: (inView, entry) => {
      inView && setInViewSection("hero");
      entry && addSection("hero", entry.target);
    },
  });

  return (
    <section className="
        py-[10vw] relative min-h-[100vh] flex flex-col items-center justify-center px-4 z-[0]
        bg-cover bg-no-repeat bg-center lg:bg-fixed bg-[url('/images/bg/1.webp')]
        before:content-[''] before:absolute before:inset-0 before:z-[-1] before:bg-black/80 
      "
      ref={scrollRef}
    >
      <BlurIn delay={500}>
        <Typography component='h1' variant='h1' className='text-center max-w-[1000px]'>
          Pretvaramo snove u <span className='font-light'>stvarnost!</span>
        </Typography>
      </BlurIn>

      <div className="flex flex-wrap w-full max-w-[600px] mt-12 gap-6">

        <BlurIn delay={700} className='min-w-[230px] grow'>
          <Button
            fullWidth
            endIcon={<ArrowRightAltIcon />}
            variant='outlined'
            onClick={_e => scrollToSection("products")}
          >
            Ponuda
          </Button>
        </BlurIn>

        <BlurIn delay={900}className='min-w-[230px] grow'>
          <Button
            fullWidth
            className='text-bg'
            endIcon={<ArrowRightAltIcon />}
            variant='contained'
            onClick={_e => scrollToSection("contact")}
          >
            Kontakt
          </Button>
        </BlurIn>
      </div>
    </section>
  );
};

export default React.memo(Hero);