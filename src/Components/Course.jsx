import React from 'react';
import './Style.css';

const Course = () => {
    return (
        <>
        <div className="container course-card">
         <center><h2 className='my-4'>Subject List Below <i class="fa fa-hand-o-down" aria-hidden="true"></i></h2></center>
       <div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Mathematics</h5>
        <img src="images/math.jpg" className='subject-image' alt="" />
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go Syllabus Details</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Physics</h5>
        <img src="images/physics.jpg" className='subject-image' alt="" />
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go Syllabus Details</a>
      </div>
    </div>
  </div>
</div>


<div className="row my-2">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Chemistry</h5>
        <img src="images/chemistry.jpg" className='subject-image' alt="" />
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go Syllabus Details</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Biology</h5>
        <img src="images/biology.jpg" className='subject-image' alt="" />
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go Syllabus Details</a>
      </div>
    </div>
  </div>
</div>

</div>
        
        </>
    );
}

export default Course;
