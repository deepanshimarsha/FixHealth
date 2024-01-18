import { NavLink } from 'react-router-dom'
import './footer.css'

const Footer: React.FC = () => {
    return (
        <footer className="footer--light">
            <div className="footer-big">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget">
                                <div className="footer-menu">
                                    <div className="social-links">
                                        <NavLink to="https://github.com/deepanshimarsha">
                                            Github
                                        </NavLink>
                                        <NavLink to="https://www.linkedin.com/in/deepanshi-sharma-8502a71b8/">
                                            LinkedIn
                                        </NavLink>
                                        <NavLink to="https://twitter.com/deepanshi25102k">
                                            Twitter
                                        </NavLink>
                                    </div>
                                    <div className="copyright">
                                        @2024 created by deepanshi sharma
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
