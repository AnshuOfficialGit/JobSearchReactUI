import React from 'react'
import Header from '../../components/layouts/Header'
import Footer from '../../components/layouts/Footer'
import jobseeker from '../../custom/images/jobseeker.png'
import recruiter from '../../custom/images/recruiter-img.webp'
import '../../custom/basic.css'
import { Link } from 'react-router-dom'
const RegisterType = () => {
    return (
        <>
            <Header />
            <div className="container mt-5">
                <div className="row text-center decoration">
                    <div className="col-sm-6">
                        <Link to="/recruiter/register">
                            <div class="card mb-3">
                                <h3 class="card-header">Register as Recruiter</h3>
                                <div class="card-body">
                                    <h5 class="card-title">Special title treatment</h5>
                                    <h6 class="card-subtitle text-muted">Support card subtitle</h6>
                                </div>
                                <div class="text-center">
                                    <img src={recruiter} alt="" className='job-bg' />
                                </div>
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>

                            </div>
                        </Link>
                    </div>
                    <div className="col-sm-6">
                        <Link to="/jobseeker/register">
                            <div class="card mb-3">
                                <h3 class="card-header">Register as Job Seeker</h3>
                                <div class="card-body">
                                    <h5 class="card-title">Special title treatment</h5>
                                    <h6 class="card-subtitle text-muted">Support card subtitle</h6>
                                </div>
                                <div class="text-center">
                                    <img src={jobseeker} alt="" className='job-bg' />
                                </div>

                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>

                            </div>
                        </Link>
                    </div>

                </div>

            </div>
            <Footer />
        </>
    )
}

export default RegisterType