import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './component/Home'
import About from './component/About';
import NavBar from './component/NavBar'
function App() {

  return(
    <div className='App'>
      <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path='/home' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App