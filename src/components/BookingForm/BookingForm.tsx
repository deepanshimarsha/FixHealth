import React, { useState } from "react";
import "./bookingform.css";
import "react-phone-number-input/style.css";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";

interface BookingFormProps {
  showAvailabeDoc?: boolean;
}
const BookingForm: React.FC<BookingFormProps> = ({ showAvailabeDoc }) => {
  const [slide, setSlide] = useState<number>(1);

  return (
    <div className="booking-form-main">
      <div className="heading">Book an Appointment</div>
      <div className="subheading">
        60+ Expert Physiotherapists for 200+ Conditions
      </div>
      <div className="booking-form">
        {!showAvailabeDoc ? (
          slide === 1 ? (
            <Slide1 slide={slide} setSlide={setSlide} />
          ) : slide === 2 ? (
            <Slide2 slide={slide} setSlide={setSlide} />
          ) : (
            <Slide3 />
          )
        ) : (
          <Slide4 />
        )}

        <div className="slidecontainer">
          <input
            type="range"
            min="1"
            max="4"
            value={showAvailabeDoc ? "4" : slide}
            className="slider"
            id="myRange"
          />
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
