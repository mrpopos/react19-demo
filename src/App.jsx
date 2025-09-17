import { useState } from 'react'
import TestUseReducer from './pages/hook/official/TestUseReducer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Hello React 19</h1>
        <TestUseReducer />
      </div>
    </>
  )
}

export default App
