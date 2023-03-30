import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Style.css';
const Footer = () => {
    return (
       <>
      {/* add the container if you want to extend the Footer to 75% width. */}
<div className="full-fild my-1">
  {/* Footer */}
  <footer className="text-center text-lg-start text-dark" style={{backgroundColor: '#ECEFF1'}}>
    {/* Section: Social media */}
    <section className="d-flex justify-content-between p-4 text-white" style={{backgroundColor: '#21D192'}}>
      {/* Left */}
      <div className="me-5">
        <span>Get connected with us on social networks:</span>
      </div>
      {/* Left */}
      {/* Right */}
      <div>
        <a href="https://www.facebook.com/mukeshkumar.sahu.969300" target="_blank" className="text-white me-4">
          <i className="fa fa-facebook-f" />
        </a>
        <a href="https://twitter.com/TulsiMukesh" target="_blank" className="text-white me-4">
          <i className="fa fa-twitter" />
        </a>
        <a href className="text-white me-4">
          <i className="fa fa-google" />
        </a>
        <a href="https://www.instagram.com/mukesh_tulsi/" target="_blank" className="text-white me-4">
          <i className="fa fa-instagram" />
        </a>
        <a href="https://www.linkedin.com/in/mukesh-kumar-9a1a02165/" target="_blank" className="text-white me-4">
          <i className="fa fa-linkedin" />
        </a>
        <a href="https://github.com/iasmks" target="_blank" className="text-white me-4">
          <i className="fa fa-github" />
        </a>
      </div>
      {/* Right */}
    </section>
    {/* Section: Social media */}
    {/* Section: Links  */}
    <section className>
      <div className="container text-center text-md-start mt-5">
        {/* Grid row */}
        <div className="row mt-3">
          {/* Grid column */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            {/* Content */}
            <h6 className="text-uppercase fw-bold">Company name</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, backgroundColor: '#7c4dff', height: 2}} />
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold">Nave Links</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, backgroundColor: '#7c4dff', height: 2}} />
            <p>
              <Link to="/" className="text-dark">Home</Link>
            </p>
            <p>
              <Link to="/about" className="text-dark">About</Link>
            </p>
            <p>
              <Link to='/contact' className="text-dark">Contact</Link>
            </p>
            <p>
              <Link to='/course' className="text-dark">Course</Link>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold">Branch</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, backgroundColor: '#7c4dff', height: 2}} />
            <p>
              <a href="#!" className="text-dark">Darbhanga</a>
            </p>
            <p>
              <a href="#!" className="text-dark">Patna</a>
            </p>
            <p>
              <a href="#!" className="text-dark">Muzaffarpur</a>
            </p>
            <p>
              <a href="#!" className="text-dark">Help</a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, backgroundColor: '#7c4dff', height: 2}} />
            <p><i className="fa fa-home mr-3" /> Patna Bazar Samiti</p>
            <p><i className="fa fa-envelope mr-3" /> info@coching.com</p>
            <p><i className="fa fa-phone mr-3" /> + 01 234 567 88</p>
            <p><i className="fa fa-print mr-3" /> + 01 234 567 89</p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
    </section>
    {/* Section: Links  */}
    {/* Copyright */}
    <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
      © 2023 Copyright:
      <a className="text-dark" href="#">Coching</a>
    </div>
    <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
      Developed By:
      <p className="text-dark"> <small> Mukesh Kumar(8581082579)</small></p>
    </div>
    {/* Copyright */}
  </footer>
  {/* Footer */}
</div>
{/* End of .container */}

       
       </>
    );
}

export default Footer;
