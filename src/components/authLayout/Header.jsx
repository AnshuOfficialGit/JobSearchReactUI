import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div class="container-fluid">
                <Link class="navbar-brand" >Job Portal</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <Link class="nav-link active" >Dashboard
                                <span class="visually-hidden">(current)</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/recruiter/jobs" >Jobs</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/jobseeker/applies" >Applies</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/recruiter/profile" class="nav-link" >Profile</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/jobseeker/profile" class="nav-link" >JobProfile</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/logout" >Logout</Link>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Header