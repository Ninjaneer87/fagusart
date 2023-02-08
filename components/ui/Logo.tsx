import React, { MouseEventHandler } from "react";
import { Typography } from "@mui/material";
import NextLink from "next/link";
import VillaIcon from '@mui/icons-material/Villa';

import { ButtonBase } from "@mui/material";
import { useSectionContext } from "context/sectionContext";

type Props = {
  withLabel?: boolean;
};

const Logo = ({ withLabel }: Props) => {
  const { scrollToSection, setInViewSection } = useSectionContext();

  const logoHandler: MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.preventDefault();
    scrollToSection("hero");
    setInViewSection("hero");
  };

  return (
    <div className="blur-in">
      <ButtonBase
        focusRipple
        href="/"
        LinkComponent={NextLink}
        className="flex text-center items-center pl-0 pr-0 md:pr-3 h-[51px] box-border icon-wrapper shrink-0 text-primary"
        onClick={logoHandler}
      >
        <span className="icon-wrapper text-primary">
          {/* <VillaIcon fontSize="large" color="primary" /> */}
          <img src="images/logo.svg" alt="logo" width={40} height={40} />
        </span>
        {withLabel
          ? <Typography component='span' className="block text-[1.8rem] font-[500] bg-clip-text text-transparent gradient shrink-0">
              Fagus Art
            </Typography>
          : null}
      </ButtonBase>
    </div>
  );
};

export default React.memo(Logo);
