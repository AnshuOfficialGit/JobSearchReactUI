import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div class="container-fluid">
                <Link class="navbar-brand" href="#">Job Portal</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <Link class="nav-link active" href="#">Home
                                <span class="visually-hidden">(current)</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/register/type" href="#">Register</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/" href="#">Login</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/about" class="nav-link" href="#">About Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/contact" href="#">Contact Us</Link>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Header