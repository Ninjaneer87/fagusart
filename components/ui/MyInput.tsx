import { TextField } from "@mui/material";
import React, { ChangeEvent } from "react";
import { FormControl as MyFormControlType } from "@/types/form-control.type";

type Props = Partial<MyFormControlType> & {
  inputHandler?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const MyInput = (props: Props) => {
  let inputElement = null;

  switch (props.elementType) {
    case "text-input":
      inputElement = (
          <TextField
            fullWidth
            variant="standard"
            onChange={props.inputHandler}
            label={props.label}
            color="primary"
            spellCheck="false"
            placeholder={props.placeholder}
            value={props.value || ""}
          />
      );
      break;

    case "text-area":
      inputElement = (
          <TextField
            fullWidth
            variant="standard"
            onChange={props.inputHandler}
            label={props.label}
            color="primary"
            multiline
            maxRows={6}
            spellCheck="false"
            placeholder={props.placeholder}
            value={props.value || ""}
          />
      );
      break;

    default:
      break;
  }

  return inputElement;
};

export default React.memo(MyInput);
