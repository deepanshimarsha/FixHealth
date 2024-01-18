import React from 'react'
import { NavbarProps } from '../../types'
import './navbar.css'
import toggleOn from '../../assets/toggle-on.png'
import toggleOff from '../../assets/toggle-off.png'

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, setIsDarkMode }) => {
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }

    return (
        <div className="navbar-section">
            <div className="container">
                <div className="logo">FixHealth</div>
                <div className="toggleMode" onClick={toggleDarkMode}>
                    <img
                        src={isDarkMode ? toggleOn : toggleOff}
                        alt="toggle"
                        width="40px"
                        style={{ cursor: 'pointer' }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Navbar
