import React, { useState } from 'react'
import Header from '../../components/authLayout/Header'
import Footer from '../../components/authLayout/Footer'
import { Link } from 'react-router-dom'

const Profile = () => {
    const [readOnly, setReadOnly] = useState(true)
    const handleFocus = () => {
        setReadOnly(false)
    }
    return (
        <>
            <Header />
            <div className="container">
                <div className="row mt-5">
                    <div className="col-sm-2">

                    </div>
                    <div className="col-sm-8">
                        <h3>Company Profile</h3>
                        <hr />
                        <form>
                            <div className='form-group  mb-3'>
                                <label for="company_profile" class="form-label">Company Profile </label>
                                <input type="file" class="form-control" id="company_profile" name="company_profile" />

                            </div>
                            <div className="row">
                                <div className='form-group col-sm-6 mb-3'>
                                    <label for="company_name" class="form-label">Company Name </label>
                                    <input type="text" class="form-control" id="company_name" name="company_name" placeholder="Enter Company Name" readOnly={readOnly}
                                        onFocus={handleFocus} />

                                </div>
                                <div className='form-group col-sm-6  mb-3'>
                                    <label for="company_email" class="form-label">Email </label>
                                    <input type="email" class="form-control" name='company_email' id="company_email" placeholder="Enter company email" readOnly={readOnly}
                                        onFocus={handleFocus} />

                                </div>
                            </div>
                            <div className="row">
                                <div className='form-group col-sm-6 mb-3'>
                                    <label for="website_url" class="form-label">Website URL </label>
                                    <input type="text" class="form-control" id="website_url" name="website_url" placeholder="Enter Website URL" readOnly={readOnly}
                                        onFocus={handleFocus} />

                                </div>
                                <div className='form-group col-sm-6  mb-3'>
                                    <label for="linked_in_profile" class="form-label">LinkedIn Profile </label>
                                    <input type="email" class="form-control" name='linked_in_profile' id="linked_in_profile" placeholder="Enter LinkedIn Profile URL" readOnly={readOnly}
                                        onFocus={handleFocus} />

                                </div>
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
                            <div className="row">
                                <div className='form-group col-sm-6 mb-3'>
                                    <label for="mobile" class="form-label">Mobile</label>
                                    <input type="text" class="form-control" name="mobile" id="mobile" placeholder="Mobile Number" readOnly={readOnly}
                                        onFocus={handleFocus} />
                                </div>
                                <div className='form-group col-sm-6 mb-3'>
                                    <label for="type" class="form-label">Industry Type</label>
                                    <input type="text" class="form-control" name="type" id="type" placeholder="Industry Type" readOnly={readOnly}
                                        onFocus={handleFocus} />
                                </div>
                            </div>
                            <div className='form-group mb-3'>
                                    <label for="no_of_employee" class="form-label">No. of Employee </label>
                                    <input type="text" class="form-control" name='no_of_employee' id="no_of_employee" placeholder="No. of Employees" readOnly={readOnly}
                                        onFocus={handleFocus} />

                                </div>
                            <div className='form-group  mb-3'>
                                <label for="about_company" class="form-label">About Company</label>
                                <textarea class="form-control" name="about_company" id="about_company" placeholder="About Company" readOnly={readOnly}
                                    onFocus={handleFocus} />
                            </div>
                            <div className='form-group  mb-3'>
                                <label for="address" class="form-label">Company Address</label>
                                <textarea class="form-control" name="address" id="address" placeholder="Company Address" readOnly={readOnly}
                                    onFocus={handleFocus} />
                            </div>
                            <div className='form-group mb-3'>
                                <button type="button" class="btn btn-primary col-sm-12"><i class="fa-solid fa-floppy-disk"></i>  Save Changes</button>
                            </div>
                        </form>

                        
                    </div>
                    <div className="col-sm-2">

                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Profile