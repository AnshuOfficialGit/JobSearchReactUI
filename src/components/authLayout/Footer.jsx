import React from 'react'
import '../../custom/style.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
      <div className="footer mt-5">
        <div className="container">

          <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12">
              <p className="copyright">
                Copyright © 2024 Design & developed By <Link to="">Anshu Sharma</Link>.
              </p>
            </div>

          </div>

        </div>

      </div>

    </>
  )
}

export default Footer