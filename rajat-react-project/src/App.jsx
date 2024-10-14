import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(10)
  const addValue=()=>{setCounter(counter+1)}
  const removeValue=()=>{
    if(counter>0)
    setCounter(counter-1)
  }
  return (
  <>
    {/* let [counter,setCounter2]=useState(10) */}
    <h1>counter : {counter}</h1>
    <button onClick={addValue}>Add one</button>
    <button onClick={removeValue}>remove one</button>
    </>
  )
}

export default App
// ham directly variable declare kar ke value ui pe nhi show kar sakte 
// for that we use useState(intial value)  it contain
// an array of intiat value variable , function name
// now do what you want to do with it 
// the useState is called as hook
