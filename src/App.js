import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';
import './App.css';
import Home from './component/Home'
import About from './component/About';
import NavBar from './component/NavBar'
import Page404 from './component/Page404';
function App() {

  return(
    <div className='App'>
      <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path='/home' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/*' element={<Navigate to="/home" />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App