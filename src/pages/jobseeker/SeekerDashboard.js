import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/authLayout/Header'
import Footer from '../../components/authLayout/Footer'

const SeekerDashboard = () => {
    return (
        <>
            <Header />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-6 text-start">
                        <h3>New Jobs</h3>
                    </div>

                </div>
                <div className="row">

                    <div className="col-sm-4 mt-3">
                        <div className="card shadow-lg p-3 mb-5 bg-body rounded">
                            <div className="card-body">
                                <h4><i class="fa-solid fa-business-time"></i> Title- Java Developer</h4>
                                <div className="row mt-4">
                                    <div className="col-sm-4 text-start">

                                        <Link to="#" className='btn btn-success' title='Edit Job'><i class="fa-regular fa-floppy-disk"></i> Apply</Link>

                                    </div>

                                    <div className="col-sm-8 text-end">
                                        <Link to="/jobseeker/job/details" className='btn btn-success' title='View Details'><i class="fa-solid fa-circle-info"></i> Details</Link>
                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

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

                                        <Link to="#" className='btn btn-success' title='Edit Job'><i class="fa-regular fa-floppy-disk"></i> Apply</Link>

                                    </div>

                                    <div className="col-sm-8 text-end">
                                        <Link to="/jobseeker/job/details" className='btn btn-success' title='View Details'><i class="fa-solid fa-circle-info"></i> Details</Link>
                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

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

                                        <Link to="#" className='btn btn-success' title='Edit Job'><i class="fa-regular fa-floppy-disk"></i> Apply</Link>

                                    </div>

                                    <div className="col-sm-8 text-end">
                                        <Link to="/jobseeker/job/details" className='btn btn-success' title='View Details'><i class="fa-solid fa-circle-info"></i> Details</Link>
                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

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

                                        <Link to="#" className='btn btn-success' title='Edit Job'><i class="fa-regular fa-floppy-disk"></i> Apply</Link>

                                    </div>

                                    <div className="col-sm-8 text-end">
                                        <Link to="/jobseeker/job/details" className='btn btn-success' title='View Details'><i class="fa-solid fa-circle-info"></i> Details</Link>
                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

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

                                        <Link to="#" className='btn btn-success' title='Edit Job'><i class="fa-regular fa-floppy-disk"></i> Apply</Link>

                                    </div>

                                    <div className="col-sm-8 text-end">
                                        <Link to="/jobseeker/job/details" className='btn btn-success' title='View Details'><i class="fa-solid fa-circle-info"></i> Details</Link>
                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

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

                                        <Link to="#" className='btn btn-success' title='Edit Job'><i class="fa-regular fa-floppy-disk"></i> Apply</Link>

                                    </div>

                                    <div className="col-sm-8 text-end">
                                        <Link to="/jobseeker/job/details" className='btn btn-success' title='View Details'><i class="fa-solid fa-circle-info"></i> Details</Link>
                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

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

export default SeekerDashboard