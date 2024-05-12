import React from 'react'
import Footer from '../../../components/authLayout/Footer'
import { Link } from 'react-router-dom'
import Header from '../../../components/authLayout/Header'

const ApplicantsDetails = () => {
    return (
        <>
            <>
                <Header />
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm-2">

                        </div>
                        <div className="col-sm-8">
                            <div class="card shadow-lg p-3 mb-5 bg-body rounded">
                                <div class="card-body">
                                    <h4 class="card-title text-center">Applicant details</h4>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-6 mt-3">
                                            <h6 class="card-subtitle mb-2 text-muted">Name</h6>
                                            <p class="card-text">Anshu</p>
                                        </div>
                                        <div className="col-sm-6 mt-3">
                                            <h6 class="card-subtitle mb-2 text-muted">Experience</h6>
                                            <p class="card-text">2.8 Years</p>
                                        </div>
                                        <div className="col-sm-6 mt-3">
                                            <h6 class="card-subtitle mb-2 text-muted">Job Profile</h6>
                                            <p class="card-text">Software Developer</p>
                                        </div>
                                        <div className="col-sm-6 mt-3">
                                            <h6 class="card-subtitle mb-2 text-muted">Skills</h6>
                                            <p class="card-text">Laravel, React, Note</p>
                                        </div>
                                        <div className="col-sm-6 mt-3">
                                            <h6 class="card-subtitle mb-2 text-muted">Description</h6>
                                            <p class="card-text"> Description</p>
                                        </div>
                                        <div className="col-sm-6 mt-3">
                                            <h6 class="card-subtitle mb-2 text-muted">Date</h6>
                                            <p class="card-text">30-04-2024</p>
                                        </div>
                                       

                                    </div>
                                    <hr />
                                    <div className="row t-5">
                                        <div className="col-sm-12">
                                            <Link to="/recruiter/job/applicants">Go Back</Link>
                                        </div>
                                    </div>






                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2"></div>
                    </div>
                </div>
                <Footer />
            </>
        </>
    )
}

export default ApplicantsDetails