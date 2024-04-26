import { useState } from 'react'
import Portfolio from './Portfolio'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Portfolio />
    </main>
  )
}

export default App
