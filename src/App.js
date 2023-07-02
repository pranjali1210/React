import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home'
import About from './component/About';
function App() {

  return(
    <div className='App'>
      <BrowserRouter>
      <Routes>
      <Route path='/home' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App