import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Style.css';

const Navebar = () => {
    return (
        <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <Link className="navbar-brand" to="/">Coching</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/course">Course</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/contact">Contact</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/price">Fee</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/team">Team</Link>
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link text-white dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Coching
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link className="dropdown-item" to="/darbhanga">Darbhanga</Link>
          <Link className="dropdown-item" to="/patna">Patna</Link>
          <Link className="dropdown-item" to="/muzaffarpur">Muzaffarpur</Link>
        </div>
      </li>
    </ul>
  </div>
</nav>
        <Outlet/>
        </>
    );
}

export default Navebar;
