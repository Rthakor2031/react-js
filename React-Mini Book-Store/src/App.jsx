import { useState } from "react"
import '../src/App.css'
import Fiction from "./components/Fiction"
import NonFiction from "./components/NonFiction"
function App(){
  let [btn , setbtn] = useState(false)
  return(
    <div className="App">
        <h1>Mini Book store</h1>
        <button data-testid="toggle-btn" onClick={()=>setbtn(!btn)}>{btn ? "Show Fiction Books" : "Show Non-Fiction Books"}</button>
        
        <div className="Conditional-container">
          {btn ? <NonFiction /> : <Fiction />}
        </div>
    </div>
  )
}

export default App