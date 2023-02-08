import { IconButton } from '@mui/material';
import React from 'react';
import { contactItems, socials } from 'utils/constants';
import BlurIn from 'components/ui/BlurIn';
import ContactInfoItem from './ContactInfoItem';

const ContactInfo = () => {

  return (
    <BlurIn className='flex flex-col gap-4'>
      <div className='text-2xl font-light'>
        Kontaktirajte nas danas i dobijte besplatnu procenu za vaš sledeći projekat nameštaja po meri
      </div>
      <div className='flex flex-col gap-3 text-lg font-light mt-10'>
        {contactItems.map(item => (
          <ContactInfoItem
            key={item.copyValue}
            icon={item.icon}
            href={item.href}
            target={item.target}
            label={item.label}
            copyValue={item.copyValue}
            message={item.message}
          />
        ))}
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