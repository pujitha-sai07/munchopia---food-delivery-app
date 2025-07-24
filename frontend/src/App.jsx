import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import AboutUs from './pages/AboutUs/AboutUs'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Report from './pages/Report/Report'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'
import FAQs from './pages/FAQs/FAQs'
import HelpSupport from './pages/HelpSupport/HelpSupport'
import Feedback from './pages/Feedback/Feedback'
import MiniCart from './pages/Cart/MiniCart/MiniCart'


const App = () => {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      <ScrollToTop />
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/about' element={<AboutUs />} />

          <Route path="/report" element={<Report />} />
          
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/help" element={<HelpSupport />} />
          <Route path="/feedback" element={<Feedback />} />

        </Routes>
      </div>

      <MiniCart />

       <Footer />
    </>
  )
}

export default App

