import React, { useState } from 'react'
import Footer from '../../components/authLayout/Footer'
import Header from '../../components/authLayout/Header'
import { Link } from 'react-router-dom'

const AddEmployement = () => {
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
                        <div className="row">
                            <div className="col-sm-6 text-start">
                                <h3>Add Employment</h3>
                            </div>
                            <div className="col-sm-6 text-end">
                                <Link to="/jobseeker/profile">Go Back</Link>
                            </div>
                        </div>

                        <hr />
                        <form>

                            <div className="row">
                                <div className='form-group col-sm-6 mb-3'>
                                    <label for="education" class="form-label">Education</label>
                                    <input type="text" class="form-control" name="education" id="education" placeholder="Education" readOnly={readOnly}
                                        onFocus={handleFocus} />
                                </div>

                                <div className='form-group col-sm-6  mb-3'>
                                    <label for="university_institute" class="form-label">University/Institute </label>
                                    <input type="university_institute" class="form-control" name='university_institute' id="university_institute" placeholder="Enter University/Institute" readOnly={readOnly}
                                        onFocus={handleFocus} />

                                </div>

                            </div>
                            <div className="row">
                                <div className='form-group col-sm-6 mb-3'>
                                    <label for="course" class="form-label">Course</label>
                                    <input type="text" class="form-control" name="course" id="course" placeholder="Course" readOnly={readOnly}
                                        onFocus={handleFocus} />
                                </div>

                                <div className='form-group col-sm-6  mb-3'>
                                    <label for="university_institute" class="form-label">Course Type </label>
                                    <select name="course_type" id="course_type" className='form-control'>
                                        <option value="">Select Course Type</option>
                                        <option value="Full Time">Full Time</option>
                                        <option value="Part Time">Part Time</option>
                                    </select>

                                </div>

                            </div>
                            <div className="row">
                                <div className='form-group col-sm-6 mb-3'>
                                    <label for="start_year" class="form-label">Start Year</label>
                                    <input type="text" class="form-control" name="start_year" id="start_year" placeholder="Start Year" readOnly={readOnly}
                                        onFocus={handleFocus} />
                                </div>

                                <div className='form-group col-sm-6  mb-3'>

                                    <div className='form-group col-sm-6 mb-3'>
                                        <label for="end_year" class="form-label">End Year</label>
                                        <input type="text" class="form-control" name="end_year" id="end_year" placeholder="End Year" readOnly={readOnly}
                                            onFocus={handleFocus} />
                                    </div>

                                </div>

                            </div>

                            <div className='form-group  mb-3'>
                                <label for="address" class="form-label">Address</label>
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

export default AddEmployement