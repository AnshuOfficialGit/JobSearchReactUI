import React, { useState } from 'react'
import Footer from '../../components/authLayout/Footer'
import Header from '../../components/authLayout/Header'
import { Link } from 'react-router-dom'

const JobSeekerProfile = () => {
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
                        <h3>Job Seeker Profile</h3>
                        <hr />
                        <form>
                            <div className='form-group  mb-3'>
                                <label for="profile_photo" class="form-label">Profile Photo</label>
                                <input type="file" class="form-control" id="profile_photo" name="profile_photo" />

                            </div>
                            <div className="row">
                                <div className='form-group col-sm-6 mb-3'>
                                    <label for="mobile" class="form-label">Mobile</label>
                                    <input type="text" class="form-control" name="mobile" id="mobile" placeholder="Mobile Number" readOnly={readOnly}
                                        onFocus={handleFocus} />
                                </div>

                                <div className='form-group col-sm-6  mb-3'>
                                    <label for="email" class="form-label">Email </label>
                                    <input type="email" class="form-control" name='email' id="email" placeholder="Enter email" readOnly={readOnly}
                                        onFocus={handleFocus} />

                                </div>
                            </div>
                            <div className="row">
                                <div className='form-group col-sm-6  mb-3'>
                                    <label for="linked_in_profile" class="form-label">LinkedIn Profile </label>
                                    <input type="email" class="form-control" name='linked_in_profile' id="linked_in_profile" placeholder="Enter LinkedIn Profile URL" readOnly={readOnly}
                                        onFocus={handleFocus} />

                                </div>
                                <div className='form-group col-sm-6 mb-3'>
                                    <label for="git_url" class="form-label">Git URL </label>
                                    <input type="text" class="form-control" id="git_url" name="git_url" placeholder="Enter GIT URL" readOnly={readOnly}
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
                            <Link to="/jobseeker/add/education">Add Education</Link> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            <Link to="/jobseeker/add/employment">Add Employment</Link>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            <Link to="/jobseeker/add/skills">Add Skills</Link>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            <Link to="/jobseeker/add/projects">Add Projects</Link>

                            <div className='form-group mt-2 mb-3'>
                                <label for="address" class="form-label">Address</label>
                                <textarea class="form-control" name="address" id="address" placeholder="Address" readOnly={readOnly}
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

export default JobSeekerProfile