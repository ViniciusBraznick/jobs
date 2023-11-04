interface AuthHeaderText{
  text: string
}

export default function AuthHeaderText({text}: AuthHeaderText) {
  return (
    <p>{text}</p>
  )
}
