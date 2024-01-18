import React from 'react'
import './testimonial.css'
import TestimonialCard from './TestimonialCard'

export interface TestimonialProp {
    isDarkMode: boolean
}
const Testimonials: React.FC<TestimonialProp> = ({ isDarkMode }) => {
    return (
        <div className="testimonials-section">
            <div className="heading">TESTIMONIALS</div>
            <div className="subheading">Patient Recovery Stories</div>
            <div className="testimonials-container">
                <TestimonialCard isDarkMode={isDarkMode} />
            </div>
        </div>
    )
}

export default Testimonials
