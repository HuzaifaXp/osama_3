import React from 'react';
import './Offers.css'

function Offers() {
    return (
        <React.Fragment>
            <div className="container-fluid offer pt-5 animate__animated animate__slideInDown">
          <div className="row px-xl-5">
              <div className="col-md-6 pb-4 bgGradient">
                  <div className="position-relative  text-center text-md-right text-white mb-2 py-5 px-5">
                      <img src="assets/img/offer-1.png" alt=""/>
                      <div className="position-relative index " >
                          <h5 className="text-uppercase  mb-3">20% off the all order</h5>
                          <h1 className="mb-4 font-weight-semi-bold">Just Arrived Collection</h1>
                          <a href="" className="btn btn-outline-primary py-md-2 px-md-3">Shop Now</a>
                      </div>
                  </div>
              </div>
              <div className="col-md-6 pb-4 bgGradient">
                  <div className="position-relative  text-center text-md-left text-white mb-2 py-5 px-5">
                      <img src="assets/img/offer-2.png" alt=""/>
                      <div className="position-relative index" >
                          <h5 className="text-uppercase  mb-3">Upto 50% off the all order</h5>
                          <h1 className="mb-4 font-weight-semi-bold">On Sale Collection</h1>
                          <a href="" className="btn btn-outline-primary py-md-2 px-md-3">Shop Now</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
        </React.Fragment>
    );
}

export default Offers