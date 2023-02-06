import { ButtonBase } from "@mui/material";
import { useSectionContext } from "context/sectionContext";
import React, { useCallback, useEffect, useState } from "react";
import { navItems } from "utils/constants";

const DrawerMobile = () => {
  const { inViewSection, scrollToSection, setInViewSection} = useSectionContext();
  const [hide, setHide] = useState(false);
  const [y, setY] = useState(0);

  const handleScroll = useCallback(
    (_e: Event) => {
      if (y > window.scrollY) {
        setHide(false);
      } else if (y < window.scrollY) {
        setHide(true);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    () => window.removeEventListener("scroll", handleScroll);
  }, [y]);

  return (
    <nav className={`fixed transform-gpu left-3 bottom-3 right-3 z-10 min-h-16 ${hide ? 'blur-out' : 'blur-in'} transition-transform overflow-hidden w-auto`}>
      <ul className="bg-black/40 backdrop-blur-lg flex gap-2 py-2 rounded-2xl justify-evenly">
        {navItems.map(item => (
          <li key={item.id} className='flex flex-col items-center'>
            <ButtonBase
              aria-label={item.name}
              focusRipple
              color="primary"
              onClick={_e => {
                scrollToSection(item.name);
                setInViewSection(item.name);
              }}
              className={`icon-wrapper p-2 rounded-lg justify-center flex-col gap-1 ${item.name === inViewSection ? "bg-themed-bg text-primary" : ""}`}
            >
              {item.icon}
              <span className={`text-[0.6rem] text-center ${item.name === inViewSection ? "text-primary" : ""}`}>{item.text}</span>
            </ButtonBase>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default React.memo(DrawerMobile);
