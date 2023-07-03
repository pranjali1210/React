import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';
import './App.css';
import Home from './component/Home'
import About from './component/About';
import NavBar from './component/NavBar'
import Page404 from './component/Page404';
import User from './component/User';
import Filter from './component/Filter';
import Contact from './component/Contact';
import Company from './component/Company';
import Channel from './component/Channel';
import Other from './component/Other';
function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/user/:name' element={<User />} />
          <Route path='/*' element={<Navigate to="/home" />} />
          <Route path='/filter' element={<Filter />} />
          <Route path='/contact/' element={<Contact />} >
          <Route path='company' element={<Company />} />
          <Route path='channel' element={<Channel />} />
          <Route path='other' element={<Other />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div >
  )

}

export default App