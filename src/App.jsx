
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/pages/About'
import Home from './components/pages/Home'
import Header from './components/pages/Header'
import Sign from './components/pages/Sign'
import Profile from './components/pages/Profile'


function App() {
  return (
    <div className='min-h-screen'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/Profile' element={<Profile/>}/>

          <Route path='/About' element={<About />} />

          <Route path="/Sign" element={<Sign />}>

          <Route path="*" element={<h1>404 Not Found</h1>} /> {/* Catch all other routes */}
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App





