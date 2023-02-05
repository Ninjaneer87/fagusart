import React, { MouseEventHandler } from "react";
import { Typography } from "@mui/material";
import NextLink from "next/link";
import VillaIcon from '@mui/icons-material/Villa';

import { ButtonBase, useTheme, useMediaQuery } from "@mui/material";

type Props = {
  withLabel?: boolean;
};

const Logo = ({ withLabel }: Props) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(768));

  const logoHandler: MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.preventDefault();
    document.body.scrollIntoView({ behavior: "smooth" });
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
          <VillaIcon fontSize="large" color="primary" />
        </span>
        {withLabel
          ? <Typography component='span' className="block text-[1.8rem] font-[500] bg-clip-text text-transparent gradient shrink-0">
              FagusArt
            </Typography>
          : null}
      </ButtonBase>
    </div>
  );
};

export default React.memo(Logo);
