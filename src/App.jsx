import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footnote from './Comonents/Footnote'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Footnote />
      </div>
      
    </>
  )
}

export default App
