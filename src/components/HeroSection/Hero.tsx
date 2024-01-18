import React from 'react'
import './hero.css'
import hero from '../../assets/hero-image.jpg'

const HeroSection: React.FC = () => {
    return (
        <div className="hero-section">
            <img className="hero-img" src={hero} alt="img" />
        </div>
    )
}

export default HeroSection
