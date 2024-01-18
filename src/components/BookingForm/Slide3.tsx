import 'react-phone-number-input/style.css'

import { useNavigate } from 'react-router-dom'

interface Slide3Props {
    complaints: string
    slide: number
    setSlide: React.Dispatch<React.SetStateAction<number>>
    age: number | undefined
    setComplaints: React.Dispatch<React.SetStateAction<string>>
    experience: boolean
    setExperience: React.Dispatch<React.SetStateAction<boolean>>
    city: string
}

const Slide3: React.FC<Slide3Props> = ({
    complaints,
    setComplaints,
    age,
    slide,
    setSlide,
    experience,
    setExperience,
    city,
}) => {
    const navigate = useNavigate()
    const handleSlide1 = (e: any) => {
        e.preventDefault()
        setSlide(slide + 1)
        navigate(`/${city}`)
    }

    const toggleExperience = () => {
        setExperience(!experience)
    }

    return (
        <form className="form-container" onSubmit={(e) => handleSlide1(e)}>
            <div className="input-group">
                <textarea
                    className="form-input-textarea"
                    rows={8}
                    cols={40}
                    placeholder="Enter Complaints"
                    value={complaints}
                    onChange={(e) => setComplaints(e.target.value)}
                ></textarea>
                {age && age >= 40 && (
                    <label>
                        {' '}
                        <input
                            type="checkbox"
                            onChange={toggleExperience}
                            checked={experience}
                        />{' '}
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
    )
}

export default Slide3
