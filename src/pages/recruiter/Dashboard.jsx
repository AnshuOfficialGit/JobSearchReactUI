import React from 'react'
import Header from '../../components/authLayout/Header'
import Footer from '../../components/authLayout/Footer'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <>
            <Header />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-4 mt-3">
                        <div className="card shadow-lg p-3 mb-5 bg-body rounded">
                            <div className="card-body">
                                <Link to="/recruiter/jobs"><h4><i class="fa-solid fa-business-time"></i> Jobs</h4></Link>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 4000
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mt-3">
                        <div className="card shadow-lg p-3 mb-5 bg-body rounded">
                            <div className="card-body">

                                <Link to="/recruiter/applications"><h4> <i class="fa-solid fa-users"></i> Applications</h4></Link>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 3000
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mt-3">
                        <div className="card shadow-lg p-3 mb-5 bg-body rounded">
                            <div className="card-body">
                                <Link to="/recruiter/jobseeker"><h4> <i class="fa-solid fa-users"></i> All Job Seekers</h4></Link>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 3000
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <Footer />
        </>
    )
}

export default Dashboard