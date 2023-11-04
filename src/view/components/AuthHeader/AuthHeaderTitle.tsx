import { H1 } from "../h1";

interface AuthHeaderTitleProps{
  title: string
}

export default function AuthHeaderTitle({title}: AuthHeaderTitleProps) {
  return (
    <H1>{title}</H1>
  )
}
