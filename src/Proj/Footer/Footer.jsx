import React from 'react'

export default function Footer() {
  return  <>
  <footer className='text-white'>
    <div className="footer-top py-3 bg-dark ">
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-4">
                    <h5>LOCATION</h5>
                    <p>2215 John Daniel Drive</p>
                    <span>Clark, MO 65243</span>
                </div>
                <div className="col-md-4">
                    <h4>AROUND THE WEB</h4>
                    <ul className='d-flex '>
                        <li className='list-group mx-2'><i class="fa-brands fa-facebook"></i></li>
                        <li  className='list-group  mx-2'><i class="fa-brands fa-twitter"></i></li>
                        <li  className='list-group  mx-2'><i class="fa-brands fa-linkedin"></i></li>
                        <li  className='list-group  mx-2'><i class="fa-brands fa-instagram"></i></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h4>ABOUT FREELANCER</h4>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>
        </div>
    </div>
    <div className="footer-bottom py-3 bg-black">
        <h5 className='text-center'>Copyright © Your Website 2021</h5>
    </div>
  </footer>

  </>
}
