import useBoxPosition from 'hooks/useBoxPosition';
import React, { useRef } from 'react';
import { navItems } from 'utils/constants';
import { ListItemButton } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import classes from './HeaderNavItems.module.scss';
import { useSectionContext } from 'context/sectionContext';


const HeaderNavItems = () => {
  const { inViewSection, scrollToSection, setInViewSection } = useSectionContext();
  const { boxRef, boxPosition } = useBoxPosition<HTMLButtonElement, string>(inViewSection);

  return (
    <>
      <List
        disablePadding
        component='nav'
        className={`${classes.navbarInner} transform-gpu`}
        style={boxPosition}
      >
        {navItems.map(({ id, name, text, icon }) =>
          <ListItemButton
            key={id}
            {...(name === inViewSection && { ref: boxRef })}
            className={`${classes.listItem}`}
            component="button"
            disableRipple
            data-box-trigger={name}
            onClick={_e => {
              scrollToSection(name);
              setInViewSection(name);
            }}
          >
            {icon}
            <ListItemText primary={text} />
          </ListItemButton>
        )}
      </List>
    </>
  );
};

export default React.memo(HeaderNavItems);