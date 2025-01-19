
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/pages/About'
import Home from './components/pages/Home'
import Header from './components/pages/Header'
import Sign from './components/pages/Sign'
// import {Button } from '@mui/material'
function App() {
  return (
    <div className=''>
      <Router>
        <Header />
      

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path="/Sign" element={<Sign />}>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App





