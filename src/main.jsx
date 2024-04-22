import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CamCreation from './components/forms/CamCreation.jsx'
import Navbar from './components/nav/Navbar.jsx'
import Footer from './components/footer/Footer.jsx'
import Faq from './pages/Faq.jsx'
import ContactUs from './pages/ContactUs.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Team from './pages/Team.jsx'
import Values from './pages/Values.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='camCreateForm' element={<CamCreation />} />
      <Route path='faq' element={<Faq/>} />
      <Route path='contactUs' element={<ContactUs />} />
      <Route path='team' element={<Team />} />
      <Route path='aboutUs' element={<AboutUs />} />
      <Route path='values' element={<Values />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
)
