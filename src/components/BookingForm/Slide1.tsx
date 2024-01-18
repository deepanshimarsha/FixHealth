import 'react-phone-number-input/style.css'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'

interface Slide1Props {
    phone: string
    slide: number
    name: string
    setSlide: React.Dispatch<React.SetStateAction<number>>
    setPhone: React.Dispatch<React.SetStateAction<string>>
    setName: React.Dispatch<React.SetStateAction<string>>
}

const Slide1: React.FC<Slide1Props> = ({
    phone,
    setPhone,
    slide,
    setSlide,
    name,
    setName,
}) => {
    const handleSlide1 = (e: any) => {
        e.preventDefault()
        const errorPhone = phone
            ? isValidPhoneNumber(phone)
                ? false
                : true
            : true
        if (!errorPhone) {
            setSlide(slide + 1)
        }
    }

    const handlePhoneChange = (value: string) => {
        setPhone(value)
    }
    return (
        <form className="form-container" onSubmit={(e) => handleSlide1(e)}>
            <div className="input-group">
                <input
                    className="form-input"
                    type="text"
                    placeholder="Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <PhoneInput
                    international
                    placeholder="Enter phone number"
                    defaultCountry="IN"
                    countryCallingCodeEditable={false}
                    value={phone}
                    error={
                        phone
                            ? isValidPhoneNumber(phone)
                                ? undefined
                                : 'Invalid phone number'
                            : 'Phone number required'
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
    )
}

export default Slide1
