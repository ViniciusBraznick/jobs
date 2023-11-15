import { ComponentProps } from "react";
import { Fieldset, Label } from "./styles";

interface InputProps extends ComponentProps<'input'> {}

export function Input({placeholder, name, id, ...props}: InputProps) {
  const inputID = id ?? name;
  return(
    <Fieldset>
      <input {...props} name={name} placeholder=" " id={inputID} />
      <Label htmlFor={inputID}>
        {placeholder}
      </Label>

    </Fieldset>
  )
}
