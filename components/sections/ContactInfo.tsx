import { IconButton } from '@mui/material';
import React from 'react';
import { socials } from 'utils/constants';
import BlurIn from '../ui/BlurIn';

const ContactInfo = () => {
  return (
    <BlurIn className='flex flex-col gap-4'>
      <div className='font-bold'>
        Kontaktirajte nas danas i dobijte besplatnu procenu za vaš sledeći projekat nameštaja po meri
      </div>
      <div className='flex flex-col gap-1 text-lg font-light mt-10'>
        <div>
          TEL/FAX: <a className='text-primary' href="tel:+38125779772">+381 25 / 779 772</a>
        </div>
        <div>
          MOB: <a className='text-primary' href="tel:+381638088423">+381 63 / 80 88 423</a>
        </div>
        <div>
          E-MAIL: <a className='text-primary' href="mailto:kontakt@fagusart.com">kontakt@fagusart.com</a>
        </div>
      </div>
      <hr className='w-full' />
      <ul className='flex gap-4 justify-start items-center'>
        {socials.map(({ icon, name, link }) => (
          <li key={name}>
            <IconButton
              aria-label={name}
              size="large"
              LinkComponent={'a'}
              href={link}
              target='_blank'
            >
              {icon}
            </IconButton>
          </li>
        ))}
      </ul>
    </BlurIn>
  );
};

export default React.memo(ContactInfo);