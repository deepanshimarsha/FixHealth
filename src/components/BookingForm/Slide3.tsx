import "react-phone-number-input/style.css";
import { useBookingAppointmentContext } from "../../context/BookingAppointmentContext";

import { useNavigate } from "react-router-dom";

const Slide3: React.FC = () => {
  const { formData, setFormData } = useBookingAppointmentContext();
  const navigate = useNavigate();
  const handleSlide3 = (e: any) => {
    e.preventDefault();
    navigate(`/${formData.city}`);
  };

  const toggleExperience = () => {
    setFormData((prev) => ({ ...prev, experience: !formData.experience }));
  };

  return (
    <form className="form-container" onSubmit={(e) => handleSlide3(e)}>
      <div className="input-group">
        <textarea
          className="form-input-textarea"
          rows={8}
          cols={40}
          placeholder="Enter Complaints"
          value={formData.complaints}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, complaints: e.target.value }))
          }
        ></textarea>
        {formData.age && formData.age >= "40" && (
          <label>
            {" "}
            <input
              type="checkbox"
              onChange={toggleExperience}
              checked={formData.experience}
            />{" "}
            <span className="checkbox-label">
              Any previous experience with physiotherapy
            </span>
          </label>
        )}
      </div>

      <div>
        <button className="button-1" type="submit">
          Continue
        </button>
      </div>
    </form>
  );
};

export default Slide3;
