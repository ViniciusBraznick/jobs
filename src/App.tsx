import { Router } from "./Router"
import { globalStyles } from "./view/styles/globalStyles";

function App() {
  globalStyles();
  return (
    <>
    <Router />
    </>
  )
}

export default App
