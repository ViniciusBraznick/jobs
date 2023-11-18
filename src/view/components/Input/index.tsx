import { ComponentProps, useState } from "react";
import { ButtonIcon, Fieldset, Label } from "./styles";
import { EyeOpenIcon, EyeClosedIcon } from '@radix-ui/react-icons';

interface InputProps extends ComponentProps<'input'> {}

export function Input({placeholder, name, id, type, ...props}: InputProps) {
  const [inputType, setInputType] = useState(type);
  const inputID = id ?? name;

  return(
    <Fieldset>
      <input {...props} name={name} type={inputType} placeholder=" " id={inputID} />
      <Label htmlFor={inputID}>
        {placeholder}
      </Label>

      {inputID === 'password' && (
        <ButtonIcon type="button" onClick={() => setInputType(inputType === 'password' ? 'text' : 'password')}>
          {inputType === 'password' ? <EyeClosedIcon width={20} height={20} /> : <EyeOpenIcon width={20} height={20}/>}
        </ButtonIcon>
      )}
    </Fieldset>
  )
}
