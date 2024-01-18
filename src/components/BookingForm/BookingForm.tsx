import React, { useState } from 'react'
import './bookingform.css'
import 'react-phone-number-input/style.css'
import Slide1 from './Slide1'
import Slide2 from './Slide2'
import Slide3 from './Slide3'
import Slide4 from './Slide4'

interface BookingFormProps {
    showAvailabeDoc?: boolean
}
const BookingForm: React.FC<BookingFormProps> = ({ showAvailabeDoc }) => {
    const [slide, setSlide] = useState<number>(1)

    const [name, setName] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [age, setAge] = useState<number | undefined>()
    const [city, setCity] = useState<string>('')
    const [company, setCompany] = useState<string>('')
    const [complaints, setComplaints] = useState<string>('')
    const [experience, setExperience] = useState<boolean>(false)

    return (
        <div className="booking-form-main">
            <div className="heading">Book an Appointment</div>
            <div className="subheading">
                60+ Expert Physiotherapists for 200+ Conditions
            </div>
            <div className="booking-form">
                {!showAvailabeDoc ? (
                    slide === 1 ? (
                        <Slide1
                            phone={phone}
                            setPhone={setPhone}
                            slide={slide}
                            setSlide={setSlide}
                            name={name}
                            setName={setName}
                        />
                    ) : slide === 2 ? (
                        <Slide2
                            slide={slide}
                            setSlide={setSlide}
                            age={age}
                            city={city}
                            company={company}
                            setAge={setAge}
                            setCity={setCity}
                            setCompany={setCompany}
                        />
                    ) : (
                        <Slide3
                            age={age}
                            complaints={complaints}
                            setComplaints={setComplaints}
                            slide={slide}
                            setSlide={setSlide}
                            experience={experience}
                            setExperience={setExperience}
                            city={city}
                        />
                    )
                ) : (
                    <Slide4 city={city} slide={slide} setSlide={setSlide} />
                )}

                <div className="slidecontainer">
                    <input
                        type="range"
                        min="1"
                        max="4"
                        value={showAvailabeDoc ? '4' : slide}
                        className="slider"
                        id="myRange"
                    />
                </div>
            </div>
        </div>
    )
}

export default BookingForm
