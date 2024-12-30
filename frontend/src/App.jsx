
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import UsedBooks from './pages/UsedBooks/UsedBooks'

import Footer from './components/Footer/Footer'
import { useState } from 'react'
import LoginPopup from './components/LoginPopup/LoginPopup'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'

import AboutUs from './components/AboutUs/AboutUs'
const App = () => {

  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app' >
      <Navbar  />
     
      <Routes >
        <Route path='/' element={<Home  setShowLogin={setShowLogin}/>} />
        <Route path='/cart' element={<Cart /> } />
        <Route path='/order' element={<PlaceOrder /> } />
        <Route path='/aboutus' element={<AboutUs /> } />
        <Route path='/usedbooks' element={<UsedBooks />} />
        
      </Routes>
      
    </div>
    <Footer />
    </>
  )
}

export default App



