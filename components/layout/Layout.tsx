import React, { ReactNode } from 'react'
import Header from './Header/Header'
import Footer from './Footer'
import { useMediaQuery, useTheme } from '@mui/material'
import DrawerMobile from './DrawerMobile'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(1080));

  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
      {isSmallScreen ? <DrawerMobile /> : null}
    </>
  );
}
export default Layout
