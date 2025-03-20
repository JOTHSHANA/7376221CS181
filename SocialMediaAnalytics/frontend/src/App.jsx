import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
