import React, { useState } from 'react'
import Header from '../../components/layouts/Header'
import Footer from '../../components/layouts/Footer'
import loginBg from '../../custom/images/login-bg.png'
import '../../custom/basic.css'
import { Link } from 'react-router-dom'
const Login = () => {
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
            <img src={loginBg} alt="error" className='login-bg' />
          </div>
          <div className="col-sm-6">
            <form>
              <div className='form-group mb-3'>
                <label for="email" class="form-label">Email </label>
                <input type="email" class="form-control" name="email" id="email" placeholder="Enter email" readOnly={readOnly}
                  onFocus={handleFocus} />

              </div>
              <div className='form-group mb-3'>
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" name="password" id="password" placeholder="Password" readOnly={readOnly}
                  onFocus={handleFocus} />
              </div>
              <div className='form-group mb-3'>
                <button type="button" class="btn btn-primary col-sm-12"><i class="fa-solid fa-right-to-bracket"></i> Login</button>
              </div>
            </form>
            <div className="row">
              <div className="col-sm-6">
                <button type="button" class="btn btn-primary col-sm-12"><i class="fa-brands fa-facebook"></i> Facebook</button>
              </div>
              <div className="col-sm-6">
                <button type="button" class="btn btn-primary col-sm-12"><i class="fa-brands fa-google-plus-g"></i> Google</button>
              </div>
            </div>
            <div className="text-center mt-2">
              Don't have account ? <Link to="/register/type">Register</Link>
            </div>

          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Login