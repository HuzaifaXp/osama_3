import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

function Footers() {





    return (
        <React.Fragment>
             <div className="container-fluid bg-secondary text-dark mt-5 pt-5 animate__animated animate__zoomInDown">
          <div className="row px-xl-5 pt-5">
              <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
                  <a href="" className="text-decoration-none">
                      <h1 style={{color : "black"}} className="mb-4 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border border-white px-3 mr-1">ItsMs </span>Smith</h1>
                  </a>
                  <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>177 SW RANGE AVE UNIT #5559 MADISON, FL. US 32340, USA</p>
                  <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>Djkdnbho@gmail.com</p>
                  <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890</p>
              </div>
              <div className="col-lg-8 col-md-12">
                  <div className="row">
                      <div className="col-md-4 mb-5">
                          <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
                          <div className="d-flex flex-column justify-content-start">
                              
                             
                          </div>
                      </div>
                      

                      <div className="col-md-4 mb-5">
                          <h5 className="font-weight-bold text-dark mb-4">Newsletter</h5>
                          <form action="">
                              <div className="form-group">
                                  <input type="text" className="form-control border-0 py-4" placeholder="Your Name" required="required" />
                              </div>
                              <div className="form-group">
                                  <input type="email" className="form-control border-0 py-4" placeholder="Your Email"
                                      required="required" />
                              </div>
                              <div>
                                  <button className="btn btn-primary btn-block border-0 py-3" type="submit">Subscribe Now</button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
          <div className="row border-top border-light mx-xl-5 py-4">
              <div className="col-md-6 px-xl-0">
                  <p className="mb-md-0 text-center text-md-left text-dark">
                      &copy; <a className="text-dark font-weight-semi-bold" href="#"></a>. All Rights Reserved. Designed
                      by
                      <a className="text-dark font-weight-semi-bold" href="https://htmlcodex.com"></a>
                      <Link to="/" > HUZAIFA_AND_FRIENDS </Link>
                  </p>
              </div>
              <div className="col-md-6 px-xl-0 text-center text-md-right">
                  <img className="img-fluid" src="assets/img/payments.png" alt=""/>
              </div>
          </div>
      </div>
        </React.Fragment>
    );
}

export default Footers;