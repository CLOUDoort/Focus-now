import { Link, Route, Routes } from 'react-router-dom'

import About from './pages/About'
import Counter from './pages/Counter'
import Home from "./pages/Home"
import React from 'react'

const App = () => {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> |  
         <Link to="/about">About</Link>
         <Link to="/counter">Counter</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/counter' element={<Counter />} />
      </Routes>
    </div>
  )
}

export default App