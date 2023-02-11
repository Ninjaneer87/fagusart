import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSectionContext } from 'context/sectionContext';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import BlurIn from '../ui/BlurIn';
import { useMediaQuery, useTheme } from '@mui/material';

const Hero = () => {
  const { isScrolling, addSection, setInViewSection, scrollToSection } = useSectionContext();
  const { ref: scrollRef } = useInView({
    rootMargin: "-50%",
    onChange: (inView, entry) => {
      inView && !isScrolling && setInViewSection("hero");
      entry && addSection("hero", entry.target);
    },
  });
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(400));

  return (
    <section className="
        pt-[120px] pb-[10vw] relative min-h-[100vh] flex flex-col items-center justify-center px-4 z-[0]
        bg-cover bg-no-repeat bg-center lg:bg-fixed bg-[url('/images/bg/1.webp')]
        before:content-[''] before:absolute before:inset-0 before:z-[-1] before:bg-black/80 
      "
      ref={scrollRef}
    >
      <BlurIn delay={500} className='flex flex-col items-center justify-center border-[2px] border-solid border-l-primary border-r-secondary border-t-0 border-b-0 rounded-full w-[400px] h-[400px] max-w-[90vw] max-h-[90vw]'>
        <img src="images/logo.svg" alt="logo" width={150} height={150} className='max-w-[40vw] max-h-[40vw]' />
        <Typography component='h2' variant='h2' className="bg-clip-text text-transparent gradient font-normal sm:font-light shrink-0">
          Fagus Art
        </Typography>
      </BlurIn>

      <BlurIn delay={600}>
        <Typography
          component='h1'
          variant={isSmallScreen ? 'h2' : 'h1'}
          className='text-center max-w-[1000px] font-light sm:font-thin mt-3'
        >
          Zaljubi se u svoj enterijer
        </Typography>
      </BlurIn>

      <div className="flex flex-wrap w-full max-w-[600px] mt-12 gap-6">
        <BlurIn delay={700} className='min-w-[230px] grow'>
          <Button
            fullWidth
            endIcon={<ArrowRightAltIcon />}
            variant='outlined'
            onClick={_e => {
              scrollToSection("products");
              setInViewSection("products")
            }}
          >
            Ponuda
          </Button>
        </BlurIn>

        <BlurIn delay={900} className='min-w-[230px] grow'>
          <Button
            fullWidth
            className='text-bg'
            endIcon={<ArrowRightAltIcon />}
            variant='contained'
            onClick={_e => {
              scrollToSection("contact");
              setInViewSection("contact")
            }}
          >
            Kontakt
          </Button>
        </BlurIn>
      </div>
    </section>
  );
};

export default React.memo(Hero);