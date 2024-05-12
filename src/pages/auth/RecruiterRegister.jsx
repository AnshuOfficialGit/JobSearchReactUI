import React, { useState } from 'react'
import Header from '../../components/layouts/Header'
import registerBg from '../../custom/images/register-bg.png'
import { Link } from 'react-router-dom'
import Footer from '../../components/layouts/Footer'
const RecruiterRegister = () => {
    const [readOnly, setReadOnly] = useState(true)
    const handleFocus = () => {
        setReadOnly(false)
    }
    return (
        <>
            <Header />
            <div className="container">
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <img src={registerBg} alt="error" className='login-bg' />
                    </div>
                    <div className="col-sm-6">
                        <form>
                            <div className='form-group mb-3'>
                                <label for="company_name" class="form-label">Company Name </label>
                                <input type="text" class="form-control" id="company_name" name="company_name" placeholder="Enter Company Name" readOnly={readOnly}
                                    onFocus={handleFocus} />

                            </div>
                            <div className='form-group mb-3'>
                                <label for="company_email" class="form-label">Email </label>
                                <input type="email" class="form-control" name='company_email' id="company_email" placeholder="Enter company email" readOnly={readOnly}
                                    onFocus={handleFocus} />

                            </div>
                            <div className="row">
                                <div className='form-group col-sm-6 mb-3'>
                                    <label for="password" class="form-label">Password</label>
                                    <input type="password" class="form-control" name="password" id="password" placeholder="Password" readOnly={readOnly}
                                        onFocus={handleFocus} />
                                </div>
                                <div className='form-group col-sm-6 mb-3'>
                                    <label for="password" class="form-label">Confirm Password</label>
                                    <input type="password" class="form-control" name="confirm_password" id="confirm_password" placeholder="Password" readOnly={readOnly}
                                        onFocus={handleFocus} />
                                </div>
                            </div>

                            <div className='form-group mb-3'>
                                <button type="button" class="btn btn-primary col-sm-12"><i class="fa-solid fa-right-to-bracket"></i> Register</button>
                            </div>
                        </form>

                        <div className="text-center mt-2">
                            Already have an account ? <Link to="/">Login</Link>
                        </div>

                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default RecruiterRegister