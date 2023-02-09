import React from 'react';
import Logo from '../ui/Logo';
import Triangle from '../ui/Triangle';

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className='z-[1] relative text-center'>
      <Triangle position='top-ascending' />
      <div className='py-10 flex justify-center flex-col items-center font-normal'>
        <span className='w-fit'><Logo withLabel /></span>
        <div>Fagus Art © {year} | Sva prava zadržana</div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);