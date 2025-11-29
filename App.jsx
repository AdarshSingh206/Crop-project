import React from 'react'
import{Route, Routes} from 'react-router-dom'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
const App = () => {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
     </Routes>
    </div>
  )
}

export default App


   