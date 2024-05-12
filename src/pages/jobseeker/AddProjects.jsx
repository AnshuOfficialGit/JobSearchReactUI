import React, { useState } from 'react'
import Footer from '../../components/authLayout/Footer'
import Header from '../../components/authLayout/Header'
import { Link } from 'react-router-dom'

const AddProjects = () => {
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
                                <h3>Projects Description</h3>
                            </div>
                            <div className="col-sm-6 text-end">
                                <Link to="/jobseeker/profile">Go Back</Link>
                            </div>
                        </div>
                        <hr />
                        <form>
                            <div className='form-group mt-2 mb-3'>
                                <label for="project" class="form-label">Projects</label>
                                <textarea class="form-control" name="project" id="project" placeholder="Write details description about projects" rows={10} readOnly={readOnly}
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

export default AddProjects