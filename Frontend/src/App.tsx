import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <button>
        <Link to={`/uploadImage`}>Upload Image</Link>
      </button>
      <button>
        <Link to={`/`}>Home</Link>
      </button>
      
      <Outlet />
    </div>
  )
}

export default App
