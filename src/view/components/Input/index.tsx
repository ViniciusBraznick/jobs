import { ComponentProps, useState, forwardRef} from "react";
import { ButtonIcon, Fieldset, Label } from "./styles";
import { EyeOpenIcon, EyeClosedIcon, ExclamationTriangleIcon } from '@radix-ui/react-icons';

interface InputProps extends ComponentProps<'input'> {
  error?: string,
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({placeholder, name, id, type, error, ...props}, ref) => {
  const [inputType, setInputType] = useState(type);
  const inputID = id ?? name;

  return(
    <Fieldset hasError={Boolean(error)}>
      <input {...props} ref={ref} name={name} type={inputType} placeholder=" " id={inputID} />
      <Label htmlFor={inputID}>
        {placeholder}
      </Label>

      {inputID === 'password' && (
        <ButtonIcon type="button" onClick={() => setInputType(inputType === 'password' ? 'text' : 'password')}>
          {inputType === 'password' ? <EyeClosedIcon width={20} height={20} /> : <EyeOpenIcon width={20} height={20}/>}
        </ButtonIcon>
      )}
      {error && <small><ExclamationTriangleIcon /> {error}</small>}
    </Fieldset>
  )
})
