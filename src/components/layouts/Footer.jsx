import React from 'react'
import '../../custom/style.css'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>
            <div className="footer mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-4 col-xs-12">
                            <div className="single_footer">
                                <h4>Job Portal</h4>
                                <p>
                                    A job portal, also known as a job board or employment website, is an online platform designed to facilitate the connection between employers and job seekers. These portals serve as centralized hubs where employers can post job vacancies and job seekers can search and apply for available positions.
                                </p>
                            </div>
                        </div>
                        {/*- END COL */}
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="single_footer single_footer_address">
                                <h4>Quick Link</h4>
                                <ul>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Login</Link>
                                    </li>
                                    <li>
                                        <Link to="/register/type">Register </Link>
                                    </li>
                                    <li>
                                        <Link to="/about">About Us</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/*- END COL */}
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="single_footer single_footer_address">
                                <h4>Subscribe today</h4>
                                <div className="signup_form">
                                    <form action="#" className="subscribe">
                                        <input
                                            type="text"
                                            className="subscribe__input"
                                            placeholder="Enter Email Address"
                                        />
                                        <button type="button" className="subscribe__btn">
                                            <i className="fas fa-paper-plane" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="social_profile">
                                <ul>
                                    <li>
                                        <Link to="">
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <i className="fab fa-twitter" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <i className="fab fa-google-plus-g" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/*- END COL */}
                    </div>
                    {/*- END ROW */}
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 col-xs-12">
                            <p className="copyright">
                                Copyright © 2024 Design & developed By <Link to="">Anshu Sharma</Link>.
                            </p>
                        </div>
                        {/*- END COL */}
                    </div>
                    {/*- END ROW */}
                </div>
                {/*- END CONTAINER */}
            </div>

        </>
    )
}

export default Footer