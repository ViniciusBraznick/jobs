import { ComponentProps, forwardRef} from "react";
import { Fieldset, Label } from "./styles";
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

interface TextAreaProps extends ComponentProps<'textarea'> {
  error?: string,
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({placeholder, name, id, error, ...props}, ref) => {
  const inputID = id ?? name;

  return(
    <Fieldset hasError={Boolean(error)}>
      <textarea {...props} ref={ref} name={name} placeholder=" " id={inputID} />
      <Label htmlFor={inputID}>
        {placeholder}
      </Label>
      {error && <small><ExclamationTriangleIcon /> {error}</small>}
    </Fieldset>
  )
})
