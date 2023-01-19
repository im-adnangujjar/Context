import React from 'react'
import About from '../../pages/about/About'
import Home from '../../pages/home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Services from '../../pages/services/Services'
import Contact from '../../pages/contact/Contact'
import Navbar from '../navebar/Navbar'
import Footer from '../footer/Footer'



function Navigation() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Navigation