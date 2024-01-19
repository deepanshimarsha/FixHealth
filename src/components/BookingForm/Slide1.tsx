import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { useBookingAppointmentContext } from "../../context/BookingAppointmentContext";

export interface SlideProps {
  slide: number;
  setSlide: React.Dispatch<React.SetStateAction<number>>;
}

const Slide1: React.FC<SlideProps> = ({ slide, setSlide }) => {
  const { formData, setFormData } = useBookingAppointmentContext();

  const handleSlide1 = (e: any) => {
    e.preventDefault();
    const errorPhone = formData.phone
      ? isValidPhoneNumber(formData.phone)
        ? false
        : true
      : true;
    if (!errorPhone) {
      setSlide(slide + 1);
    }
  };

  const handlePhoneChange = (value: string) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };
  return (
    <form className="form-container" onSubmit={(e) => handleSlide1(e)}>
      <div className="input-group">
        <input
          className="form-input"
          type="text"
          placeholder="Name"
          required
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
        />

        <PhoneInput
          international
          placeholder="Enter phone number"
          defaultCountry="IN"
          countryCallingCodeEditable={false}
          value={formData.phone}
          error={
            formData.phone
              ? isValidPhoneNumber(formData.phone)
                ? undefined
                : "Invalid phone number"
              : "Phone number required"
          }
          onChange={handlePhoneChange}
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

export default Slide1;
