import React, { useState } from 'react'
import Header from '../../components/authLayout/Header'
import Footer from '../../components/authLayout/Footer'
import { Link } from 'react-router-dom'

const AddSkills = () => {
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
                                <h3>Add Skills</h3>
                            </div>
                            <div className="col-sm-6 text-end">
                                <Link to="/jobseeker/profile">Go Back</Link>
                            </div>
                        </div>

                        <hr />
                        <form>

                            <div className="row">
                                <div className='form-group mb-3'>
                                    <label for="skill_name" class="form-label">Skill Name</label>
                                    <input type="text" class="form-control" name="skill_name" id="skill_name" placeholder="Skill Name" readOnly={readOnly}
                                        onFocus={handleFocus} />

                                </div>


                            </div>
                            {/*  */}


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

export default AddSkills