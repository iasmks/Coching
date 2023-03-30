import React from 'react';
import './Style.css';
const Price = () => {
    return (
     <div className="container my-4">
         <center><h2 className='my-4'>Batch Type List Below <i class="fa fa-hand-o-down" aria-hidden="true"></i></h2></center>
        <div class="row">
  <div class="col-sm-4">
    <div class="card price-card">
      <div class="card-body">
        <h5 class="card-title">Foundation Batch</h5>
        <p className='card-text'>Type :- <span className='content-span'>Regular</span></p>
        <p>Language :- <span>Hindi/English</span></p>
        <p>Duration :- <span>20 Month</span></p>
        <p>Fees :- <span>55000/</span></p>
        <p>No of Test :- <span>16</span></p>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Foundation</a>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card price-card">
      <div className="card-body">
        <h5 className="card-title">Target Batch</h5>
        <p>Type :- <span>Regular</span></p>
        <p>Language :- <span>Hindi/English</span></p>
        <p>Duration :- <span>11 Month</span></p>
        <p>Fees :- <span>30000/</span></p>
        <p>No of Test :- <span>6</span></p>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Target</a>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card price-card">
      <div className="card-body">
        <h5 className="card-title">Crash Batch</h5>
        <p>Type :- <span>Regular</span></p>
        <p>Language :- <span>Hindi/English</span></p>
        <p>Duration :- <span>3 to 6 Month</span></p>
        <p>Fees :- <span>15000/</span></p>
        <p>No of Test :- <span>3</span></p>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Crash</a>
      </div>
    </div>
  </div>
</div>
     </div>
    );
}

export default Price;
