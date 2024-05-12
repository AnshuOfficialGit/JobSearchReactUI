import React, { useState } from 'react'
import Footer from '../../../components/authLayout/Footer'
import Header from '../../../components/authLayout/Header'
import { Link } from 'react-router-dom'

const EditJob = () => {
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
                        <h3>Edit Job</h3>
                        <hr />
                        <form>
                            <div className="row">
                                <div className='form-group col-sm-6 mb-3'>
                                    <label for="job_title" class="form-label">Job Title</label>
                                    <input type="text" class="form-control" name="job_title" id="job_title" placeholder="Job Title" readOnly={readOnly}
                                        onFocus={handleFocus} />
                                </div>
                                <div className='form-group col-sm-6 mb-3'>
                                    <label for="experience" class="form-label">Experience</label>
                                    <input type="text" class="form-control" name="experience" id="experience" placeholder="Experience" readOnly={readOnly}
                                        onFocus={handleFocus} />
                                </div>
                            </div>
                            <div className="row">
                                <div className='form-group col-sm-6 mb-3'>
                                    <label for="employement_type" class="form-label">Employement Type</label>
                                    <input type="text" class="form-control" name="employement_type" id="employement_type" placeholder="Employee Type" readOnly={readOnly}
                                        onFocus={handleFocus} />
                                </div>
                                <div className='form-group col-sm-6 mb-3'>
                                    <label for="department" class="form-label">Department</label>
                                    <input type="text" class="form-control" name="department" id="department" placeholder="Eepartment" readOnly={readOnly}
                                        onFocus={handleFocus} />
                                </div>
                            </div>
                            <div className='form-group mb-3'>
                                <label for="job_profile" class="form-label">Job Profile </label>
                                <input type="text" class="form-control" id="job_profile" name="job_profile" placeholder="Job Profile" readOnly={readOnly}
                                    onFocus={handleFocus} />

                            </div>
                            <div className='form-group mb-3'>
                                <label for="skills" class="form-label">Skills </label>
                                <textarea class="form-control" name='skills' id="skills" placeholder="Write Skills" readOnly={readOnly}
                                    onFocus={handleFocus} ></textarea>

                            </div>
                            <div className='form-group mb-3'>
                                <label for="job_description" class="form-label">Job Description </label>
                                <textarea class="form-control" name='job_description' id="job_description" placeholder="Write Job description" readOnly={readOnly}
                                    onFocus={handleFocus} ></textarea>

                            </div>

                            <div className="row">
                                <div className="col-sm-4">
                                </div>
                                <div className="col-sm-8 text-end">

                                    <div className='form-group mb-3'>
                                        <Link to="/recruiter/jobs" class="btn btn-danger col-sm-5"><i class="fa-solid fa-ban"></i> Cancel</Link>
                                        &nbsp;
                                        <button type="button" class="btn btn-primary col-sm-5"><i class="fa-solid fa-floppy-disk"></i> Save Changes</button>


                                    </div>
                                </div>

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

export default EditJob