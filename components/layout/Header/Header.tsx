import React from 'react';
import { useInView } from "react-intersection-observer";
import PageTop from 'components/ui/PageTop';
import { useMediaQuery, useTheme } from "@mui/material";
import Logo from '../../ui/Logo';
import HeaderNavItems from './HeaderNavItems';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  const { ref: pageTop, inView: pageTopInView } = useInView({ threshold: 1 });
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(1080));

  return (
    <>
      <PageTop ref={pageTop} />
      <header className={`fixed top-0 left-0 w-screen bg-gradient-to-b from-black/90 via-black/60 to-transparent px-3 sm:px-6 z-10`}>
        <div className='flex items-center justify-around pt-2 gap-1 sm:gap-4 appear-delay min-h-[80px]'>
          <Logo withLabel />

          <div className='flex items-center'>
            {!isSmallScreen
              ? <HeaderNavItems />
              : null}

            <HeaderSocials />
          </div>
        </div>
      </header>
    </>
  );
};

export default React.memo(Header);