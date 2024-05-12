import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/authLayout/Footer'
import Header from '../../components/authLayout/Header'

const SeekerJobDetails = () => {
    return (
        <>
            <>
                <Header />
                <div className="container mt-5">
                    <div className="row">

                        <div className="col-sm-6">
                            <div class="card shadow-lg p-3 mb-5 bg-body rounded">
                                <div class="card-body">
                                    <h4 class="card-title text-center">About Company</h4>
                                    <hr />

                                    <div className="row">
                                        <div className="col-sm-6 mt-3">
                                            <h6 class="card-subtitle mb-2 text-muted">Company Name</h6>
                                            <p class="card-text">Java Developer</p>
                                        </div>
                                        <div className="col-sm-6 mt-3">
                                            <h6 class="card-subtitle mb-2 text-muted">Email</h6>
                                            <p class="card-text">IT</p>
                                        </div>
                                        <div className="col-sm-6 mt-3">
                                            <h6 class="card-subtitle mb-2 text-muted">Website URL</h6>
                                            <p class="card-text">Fresher to 3 Years</p>
                                        </div>
                                        <div className="col-sm-6 mt-3">
                                            <h6 class="card-subtitle mb-2 text-muted">LinkedIn Profile</h6>
                                            <p class="card-text">Part time</p>
                                        </div>

                                        <div className="col-sm-6 mt-3">
                                            <h6 class="card-subtitle mb-2 text-muted">Mobile </h6>
                                            <p class="card-text">Executive Software Developer/Software Developer</p>
                                        </div>
                                        <div className="col-sm-6 mt-3">
                                            <h6 class="card-subtitle mb-2 text-muted">Industry type</h6>
                                            <p class="card-text">Java</p>
                                        </div>
                                        <div className="col-sm-6 mt-3">
                                            <h6 class="card-subtitle mb-2 text-muted">No. of Employee</h6>
                                            <p class="card-text">Job Description</p>
                                        </div>
                                        <div className="col-sm-6 mt-3">
                                            <h6 class="card-subtitle mb-2 text-muted">About Company</h6>
                                            <p class="card-text">30-04-2024</p>
                                        </div>
                                        <div className="col-sm-6 mt-3">
                                            <h6 class="card-subtitle mb-2 text-muted">Company Address</h6>
                                            <p class="card-text">Anshu Recruiter</p>
                                        </div>
                                        <hr />
                                        <div className="row t-5">
                                            <div className="col-sm-12">
                                                <Link to="/jobseeker/dashboard">Go Back</Link>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div class="card shadow-lg p-3 mb-5 bg-body rounded">
                                <div class="card-body">
                                    <h4 class="card-title text-center">Job Description</h4>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-6 mt-3">
                                            <h6 class="card-subtitle mb-2 text-muted">Job Title</h6>
                                            <p class="card-text">Java Developer</p>
                                        </div>
                                        <div className="col-sm-6 mt-3">
                                            <h6 class="card-subtitle mb-2 text-muted">Experience</h6>
                                            <p class="card-text">Fresher to 3 Years</p>
                                        </div>
                                        <div className="col-sm-6 mt-3">
                                            <h6 class="card-subtitle mb-2 text-muted">Employement type</h6>
                                            <p class="card-text">Part time</p>
                                        </div>
                                        <div className="col-sm-6 mt-3">
                                            <h6 class="card-subtitle mb-2 text-muted">Department</h6>
                                            <p class="card-text">IT</p>
                                        </div>
                                        <div className="col-sm-6 mt-3">
                                            <h6 class="card-subtitle mb-2 text-muted">Job Profile</h6>
                                            <p class="card-text">Executive Software Developer/Software Developer</p>
                                        </div>
                                        <div className="col-sm-6 mt-3">
                                            <h6 class="card-subtitle mb-2 text-muted">Skills</h6>
                                            <p class="card-text">Java</p>
                                        </div>
                                        <div className="col-sm-6 mt-3">
                                            <h6 class="card-subtitle mb-2 text-muted">Job Description</h6>
                                            <p class="card-text">Job Description</p>
                                        </div>
                                        <div className="col-sm-6 mt-3">
                                            <h6 class="card-subtitle mb-2 text-muted">Date</h6>
                                            <p class="card-text">30-04-2024</p>
                                        </div>
                                        <div className="col-sm-6 mt-3">
                                            <h6 class="card-subtitle mb-2 text-muted">Uploaded By</h6>
                                            <p class="card-text">Anshu Recruiter</p>
                                        </div>
                                        <div className="col-sm-6 mt-3">
                                            <h6 class="card-subtitle mb-2 text-muted">Applicant Count</h6>
                                            <p class="card-text">3000</p>
                                        </div>


                                    </div>
                                    <hr />
                                    <div className="row t-5">
                                        <div className="col-sm-12">
                                            <Link to="/jobseeker/dashboard">Go Back</Link>
                                        </div>
                                    </div>






                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <Footer />
            </>
        </>
    )
}

export default SeekerJobDetails