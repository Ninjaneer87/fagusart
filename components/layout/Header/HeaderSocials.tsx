import React from 'react';
import IconButton from '@mui/material/IconButton';
import { SOCIAL_ITEMS } from 'utils/constants/contact';

const HeaderSocials = () => {
  return (
    <ul className='flex items-center'>
      {SOCIAL_ITEMS.map(({ icon, name, link }) => (
        <li key={name}>
          <IconButton 
            aria-label={name} 
            size="small"
            LinkComponent={'a'}
            href={link}
            target='_blank'
          >
            {icon}
          </IconButton>
        </li>
      ))}
    </ul>
  );
};

export default React.memo(HeaderSocials);