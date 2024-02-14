import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <div className="quote-box">
        <h2>Quote of the day</h2>
        <blockquote>Loading...</blockquote>
        <span>Loading...</span> 
      </div>
    </div>
  )
}

export default App
