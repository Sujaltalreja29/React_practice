import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/Todos'
import Todos from './components/AddTodo'

function App() {


  return (
    <>
      <h1>react Redux Toolkit</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
