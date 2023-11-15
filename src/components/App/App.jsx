import { useState } from 'react'
import Guide from '../Guide/Guide.jsx'
import Controls from '../Controls/Controls.jsx'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>Breeeeathe</h1>
      <Guide />
      <Controls />
    </>
  )
}

export default App
