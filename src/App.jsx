import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Portfolio from './compoments/Portfolio';
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Portfolio></Portfolio>
    </div>
  )
}

export default App
