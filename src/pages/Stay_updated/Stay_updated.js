import React from 'react';

function Stay_updated(pops) {
    return (
        <React.Fragment>
             <div className="container-fluid bg-secondary my-5 animate__animated animate__rotateInDownRight">
          <div className="row justify-content-md-center py-5 px-xl-5">
              <div className="col-md-6 col-12 py-5">
                  <div className="text-center mb-2 pb-2">
                      <h2 className="section-title px-5 mb-3"><span className="bg-secondary px-2">Stay Updated From Us</span></h2>
                      <p>you will get notifications of new arrivals as well as daily sales and offers</p>
                  </div>
                  <form action="">
                      <div className="input-group">
                          <input type="text" className="form-control border-white p-4" placeholder="Email Goes Here"/>
                          <div className="input-group-append">
                              <button className="btn btn-primary px-4">Subscribe</button>
                          </div>
                      </div>
                  </form>
              </div>
          </div>
      </div>
        </React.Fragment>
    );
}

export default Stay_updated;