import 'react-phone-number-input/style.css'

interface Slide2Props {
    age: number | undefined
    company: string
    city: string
    slide: number
    setSlide: React.Dispatch<React.SetStateAction<number>>
    setAge: React.Dispatch<React.SetStateAction<number | undefined>>
    setCompany: React.Dispatch<React.SetStateAction<string>>
    setCity: React.Dispatch<React.SetStateAction<string>>
}

const Slide2: React.FC<Slide2Props> = ({
    age,
    city,
    company,
    setCity,
    setAge,
    setCompany,
    slide,
    setSlide,
}) => {
    const handleSlide1 = (e: any) => {
        e.preventDefault()
        setSlide(slide + 1)
    }

    return (
        <form className="form-container" onSubmit={(e) => handleSlide1(e)}>
            <div className="input-group">
                <input
                    className="form-input"
                    type="number"
                    placeholder="Age"
                    required
                    value={age}
                    min={3}
                    max={90}
                    onChange={(e) => setAge(Number(e.target.value))}
                />
                <select
                    className="form-input"
                    id="city"
                    name="city"
                    onChange={(e) => setCity(e.target.value.toLowerCase())}
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
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                />
            </div>

            <div>
                <button className="button-1" type="submit">
                    Continue
                </button>
            </div>
        </form>
    )
}

export default Slide2
