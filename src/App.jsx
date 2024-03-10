import Registro from "./components/registro/Registro"
import { useState } from "react"

function App() {
    const [mensaje, setMensaje] = useState([])
    return(
        <Registro mensaje={mensaje} setMensaje={setMensaje} />
    )
  
}

export default App
