import useBoxPosition from 'hooks/useBoxPosition';
import React, { useRef } from 'react';
import { ListItemButton } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import classes from './HeaderNavItems.module.scss';
import { useSectionContext } from 'context/sectionContext';
import { NAV_ITEMS } from 'utils/constants/navigation';


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
        {NAV_ITEMS.map(({ id, name, text, icon }) =>
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