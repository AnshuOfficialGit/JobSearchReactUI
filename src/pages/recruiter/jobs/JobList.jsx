import React from 'react'
import Header from '../../../components/authLayout/Header'
import Footer from '../../../components/authLayout/Footer'

import { Link } from 'react-router-dom';

const JobList = () => {

    return (
        <>
            <Header />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-6 text-start">
                        <h3>Job List</h3>
                    </div>
                    <div className="col-sm-6 text-end">
                        <Link to="/recruiter/upload/job" className='btn btn-primary'><i class="fa-solid fa-plus"></i> Add New Job</Link>
                    </div>
                </div>
                <div className="row">

                    <div className="col-sm-4 mt-3">
                        <div className="card shadow-lg p-3 mb-5 bg-body rounded">
                            <div className="card-body">
                                <h4><i class="fa-solid fa-business-time"></i> Title- Java Developer</h4>
                                <div className="row mt-4">
                                    <div className="col-sm-4 text-start">
                                        <Link to="/recruiter/job/details" title='View Details'><i class="fa-solid fa-circle-info"></i> </Link>

                                    </div>
                                    <div className="col-sm-4 text-center">
                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        <Link to="/recruiter/job/applicants" title='View Applicants'><i class="fa-solid fa-users-gear"></i></Link>

                                    </div>
                                    <div className="col-sm-4 text-end">
                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        <Link to="/recruiter/edit/job" title='Edit Job'><i class="fa-solid fa-pen-to-square"></i></Link>

                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mt-3">
                        <div className="card shadow-lg p-3 mb-5 bg-body rounded">
                            <div className="card-body">
                                <h4><i class="fa-solid fa-business-time"></i> Title- PHP Developer</h4>
                                <div className="row mt-4">
                                    <div className="col-sm-4 text-start">
                                        <Link to="/recruiter/job/details" title='View Details'><i class="fa-solid fa-circle-info"></i> </Link>

                                    </div>
                                    <div className="col-sm-4 text-center">
                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        <Link to="/recruiter/job/applicants" title='View Applicants'><i class="fa-solid fa-users-gear"></i></Link>

                                    </div>
                                    <div className="col-sm-4 text-end">
                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        <Link to="/recruiter/edit/job" title='Edit Job'><i class="fa-solid fa-pen-to-square"></i></Link>

                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mt-3">
                        <div className="card shadow-lg p-3 mb-5 bg-body rounded">
                            <div className="card-body">
                                <h4><i class="fa-solid fa-business-time"></i> Title- Node Developer</h4>
                                <div className="row mt-4">
                                    <div className="col-sm-4 text-start">
                                        <Link to="/recruiter/job/details" title='View Details'><i class="fa-solid fa-circle-info"></i> </Link>

                                    </div>
                                    <div className="col-sm-4 text-center">
                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        <Link to="/recruiter/job/applicants" title='View Applicants'><i class="fa-solid fa-users-gear"></i></Link>

                                    </div>
                                    <div className="col-sm-4 text-end">
                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        <Link to="/recruiter/edit/job" title='Edit Job'><i class="fa-solid fa-pen-to-square"></i></Link>

                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mt-3">
                        <div className="card shadow-lg p-3 mb-5 bg-body rounded">
                            <div className="card-body">
                                <h4><i class="fa-solid fa-business-time"></i> Title- Laravel Developer</h4>
                                <div className="row mt-4">
                                    <div className="col-sm-4 text-start">
                                        <Link to="/recruiter/job/details" title='View Details'><i class="fa-solid fa-circle-info"></i> </Link>

                                    </div>
                                    <div className="col-sm-4 text-center">
                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        <Link to="/recruiter/job/applicants" title='View Applicants'><i class="fa-solid fa-users-gear"></i></Link>

                                    </div>
                                    <div className="col-sm-4 text-end">
                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        <Link to="/recruiter/edit/job" title='Edit Job'><i class="fa-solid fa-pen-to-square"></i></Link>

                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mt-3">
                        <div className="card shadow-lg p-3 mb-5 bg-body rounded">
                            <div className="card-body">
                                <h4><i class="fa-solid fa-business-time"></i> Title- CI4 Developer</h4>
                                <div className="row mt-4">
                                    <div className="col-sm-4 text-start">
                                        <Link to="/recruiter/job/details" title='View Details'><i class="fa-solid fa-circle-info"></i> </Link>

                                    </div>
                                    <div className="col-sm-4 text-center">
                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        <Link to="/recruiter/job/applicants" title='View Applicants'><i class="fa-solid fa-users-gear"></i></Link>

                                    </div>
                                    <div className="col-sm-4 text-end">
                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        <Link to="/recruiter/edit/job" title='Edit Job'><i class="fa-solid fa-pen-to-square"></i></Link>

                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mt-3">
                        <div className="card shadow-lg p-3 mb-5 bg-body rounded">
                            <div className="card-body">
                                <h4><i class="fa-solid fa-business-time"></i> Title- Block Chain Developer</h4>
                                <div className="row mt-4">
                                    <div className="col-sm-4 text-start">
                                        <Link to="/recruiter/job/details" title='View Details'><i class="fa-solid fa-circle-info"></i> </Link>

                                    </div>
                                    <div className="col-sm-4 text-center">
                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        <Link to="/recruiter/job/applicants" title='View Applicants'><i class="fa-solid fa-users-gear"></i></Link>

                                    </div>
                                    <div className="col-sm-4 text-end">
                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        <Link to="/recruiter/edit/job" title='Edit Job'><i class="fa-solid fa-pen-to-square"></i></Link>

                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default JobList