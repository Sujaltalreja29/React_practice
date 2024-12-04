import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCount] = useState(5)
  //let counter = 5

  const Addvalue = () =>{
    if(counter<20)
      counter = counter + 1
    setCount(counter)

  }
  const Removevalue = () =>{
    if(counter>0)
      counter = counter - 1
    setCount(counter)

  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value:{counter}</h2>

    <button
    onClick={Addvalue}
    >Add value</button>
    <br />
    <button
    onClick={Removevalue}
    >Remove value</button>
    </>
  )
}

export default App
