import { useState } from 'react';
import './App.css'
function CounterApp(){
  let [Counter , setCounter] = useState(0);
  return (
    <div className='App'>
        <div style={{boxShadow:"1px 5px 7px 3px rgba(0,0,0,0.65)" , width:"400px" , height:"200px" , padding:"20px"}}>
            <h1>Counter</h1>
            <h2 style={{fontSize:"35px"}}>{Counter}</h2>

            <div className="btn-group">
              <button onClick={()=>setCounter(Counter + 1)} style={{backgroundColor:"green", color:"white"}}>Increament</button>
              <button onClick={(e)=>setCounter(e.target.Counter = 0)}>Reset</button>
              <button disabled={Counter == 0} onClick={()=>setCounter(Counter - 1)} style={{backgroundColor:"red" , color:"white"}}>Decreament</button>
            </div>
        </div>
    </div>
  )
}
export default CounterApp;
