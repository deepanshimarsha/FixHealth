import React from 'react'
import HeroSection from '../components/HeroSection/Hero'
import BookingForm from '../components/BookingForm/BookingForm'
import Testimonials from '../components/Testimonials/Testimonials'

import { NavbarProps } from '../types'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const LandingPage: React.FC<NavbarProps> = ({ isDarkMode, setIsDarkMode }) => {
    return (
        <div className="landing-page">
            <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <HeroSection />
            <BookingForm />
            <Testimonials isDarkMode={isDarkMode} />
            <Footer />
        </div>
    )
}

export default LandingPage
