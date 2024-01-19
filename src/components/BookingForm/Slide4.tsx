import DoctorCard from "./DoctorCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useBookingAppointmentContext } from "../../context/BookingAppointmentContext";
import { useMemo } from "react";

interface DoctorType {
  name: string;
  expertise: string;
  city: string;
  _id: string;
}
const Slide4: React.FC = () => {
  const { setFormData } = useBookingAppointmentContext();

  const [doctorsList, setDoctorsList] = useState<DoctorType[] | undefined>();
  const { cityName } = useParams();
  const possibleCityNames: string[] = useMemo(
    () => [
      "alipur",
      "bawana",
      "central delhi",
      "delhi",
      "east delhi",
      "karol bagh",
      "najafgarh",
      "nangloi jat",
      "narela",
      "new delhi",
      "north delhi",
      "north east delhi",
      "north west delhi",
      "pitampura",
      "rohini",
      "south delhi",
      "south west delhi",
      "west delhi",
    ],
    []
  );

  const navigate = useNavigate();
  const fetchDoctors = async () => {
    try {
      const response = await axios.get(
        "https://496b1d72-525e-490f-a601-282aba4496de-00-1suddbs9zxwbc.spock.replit.dev/"
      );
      setDoctorsList(response.data.doctors);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setFormData((prev) => ({ ...prev, city: cityName || "" }));
    if (possibleCityNames.includes(cityName)) {
      navigate(`/${cityName}`);
      fetchDoctors();
    } else {
      navigate("*");
    }
  }, [cityName, setFormData, navigate, possibleCityNames]);

  return (
    <div className="available-doc-section">
      <div>Available doctors in {cityName ? cityName : "in your city"}</div>

      {!doctorsList ? (
        <p>Loading...</p>
      ) : (
        <div className="doctors-list">
          {doctorsList
            .filter((doctor) => doctor.city.toLowerCase() === cityName)
            .map((doctor) => {
              return <DoctorCard doctorDetails={doctor} key={doctor._id} />;
            })}
        </div>
      )}

      <button className="button-1" type="submit">
        Book
      </button>
    </div>
  );
};

export default Slide4;
