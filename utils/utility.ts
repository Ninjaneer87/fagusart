import { FormControls } from "@/types/form-controls.type";
import { Validator } from "@/types/validator.type";
import { Validity } from "@/types/validity.type";
import { InputValue } from "@/types/input-value.type";
import { FormBody } from "@/types/form-body.type";

export const checkValidity = (
  value: InputValue,
  validators: Validator[],
  formState: FormControls
): Validity => {
  const validField = { isValid: true, message: "" };
  const invalidField = validators
    .map((validator) => validator(value, formState))
    .find((field) => !field.isValid);

  return invalidField || validField;
};

export const createBody = (inputs: FormControls) => {
  const body = {} as FormBody;
  for (let key in inputs) {
    body[key] = inputs[key].value;
  }

  return body;
};

export const getPhotoObject = (
  url: string,
) => {
  const img = new Image();
  img.src = url;

  if (img.complete) {
    return {
      src: url,
      width: img.naturalWidth,
      height: img.naturalHeight,
    };
  }

  img.onload = () => ({
    src: url,
    width: img.naturalWidth,
    height: img.naturalHeight,
  });

  img.onerror = () => (null);
};
