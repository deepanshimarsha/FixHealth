import "react-phone-number-input/style.css";
import { useBookingAppointmentContext } from "../../context/BookingAppointmentContext";

interface Slide2Props {
  slide: number;
  setSlide: React.Dispatch<React.SetStateAction<number>>;
}

const Slide2: React.FC<Slide2Props> = ({ slide, setSlide }) => {
  const { formData, setFormData } = useBookingAppointmentContext();
  const handleSlide1 = (e: any) => {
    e.preventDefault();
    setSlide(slide + 1);
  };

  return (
    <form className="form-container" onSubmit={(e) => handleSlide1(e)}>
      <div className="input-group">
        <input
          className="form-input"
          type="number"
          placeholder="Age"
          required
          value={formData.age}
          min={3}
          max={90}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, age: e.target.value }))
          }
        />
        <select
          className="form-input"
          id="city"
          name="city"
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              city: e.target.value.toLowerCase(),
            }))
          }
        >
          <option value="">Select City</option>
          <option value="Alipur">Alipur</option>
          <option value="Bawana">Bawana</option>
          <option value="Central Delhi">Central Delhi</option>
          <option value="Delhi">Delhi</option>
          <option value="East Delhi">East Delhi</option>
          <option value="Karol Bagh">Karol Bagh</option>
          <option value="Najafgarh">Najafgarh</option>
          <option value="Nangloi Jat">Nangloi Jat</option>
          <option value="Narela">Narela</option>
          <option value="New Delhi">New Delhi</option>
          <option value="North Delhi">North Delhi</option>
          <option value="North East Delhi">North East Delhi</option>
          <option value="North West Delhi">North West Delhi</option>
          <option value="Pitampura">Pitampura</option>
          <option value="Rohini">Rohini</option>
          <option value="South Delhi">South Delhi</option>
          <option value="South West Delhi">South West Delhi</option>
          <option value="West Delhi">West Delhi</option>
        </select>
        <input
          className="form-input"
          type="text"
          placeholder="Company"
          required
          value={formData.company}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, company: e.target.value }))
          }
        />
      </div>

      <div>
        <button className="button-1" type="submit">
          Continue
        </button>
      </div>
    </form>
  );
};

export default Slide2;
