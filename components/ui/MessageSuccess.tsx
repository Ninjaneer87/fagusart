import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Typography } from "@mui/material";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import Button from "@mui/material/Button";

type Props = {
  handleClose: () => void;
};

const MessageSuccess = ({ handleClose }: Props) => {

  return (
    <div className="mx-auto p-6 w-[500px] max-w-[100vw] m-auto bg-bg">
      <div className="animate-border">
        <MailOutlineIcon fontSize="large" />
      </div>
      <Typography variant="h6" className="text-center my-[30px]">
        Poruka je poslata!
      </Typography>
      <Button
        fullWidth
        onClick={handleClose}
        endIcon={<DoneOutlineIcon />}
        variant='contained'
        className="text-bg"
      >
        Ok
      </Button>
    </div>
  );
};

export default MessageSuccess;
