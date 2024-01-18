import DoctorCard from './DoctorCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

interface Slide4Props {
    slide: number
    setSlide: React.Dispatch<React.SetStateAction<number>>
    city: string
}

interface DoctorType {
    name: string
    expertise: string
    city: string
    _id: string
}
const Slide4: React.FC<Slide4Props> = ({ slide, setSlide, city }) => {
    const [doctorsList, setDoctorsList] = useState<DoctorType[] | undefined>()
    const { cityName } = useParams()

    const fetchDoctors = async () => {
        try {
            const response = await axios.get(
                'https://496b1d72-525e-490f-a601-282aba4496de-00-1suddbs9zxwbc.spock.replit.dev/'
            )
            setDoctorsList(response.data.doctors)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchDoctors()
    }, [])

    console.log(
        doctorsList?.filter((doctor) => doctor.city.toLowerCase() === cityName)
    )

    return (
        <div className="available-doc-section">
            <div>
                Available doctors in {cityName ? cityName : 'in your city'}
            </div>

            {!doctorsList ? (
                <p>Loading...</p>
            ) : (
                <div className="doctors-list">
                    {doctorsList
                        .filter(
                            (doctor) => doctor.city.toLowerCase() === cityName
                        )
                        .map((doctor) => {
                            return (
                                <DoctorCard
                                    doctorDetails={doctor}
                                    key={doctor._id}
                                />
                            )
                        })}
                </div>
            )}

            <button className="button-1" type="submit">
                Book
            </button>
        </div>
    )
}

export default Slide4
