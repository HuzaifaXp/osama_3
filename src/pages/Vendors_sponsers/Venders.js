import React from 'react';

function Venders() {
    return (
         <React.Fragment>
              <div className="container-fluid py-5 animate__animated animate__rotateInDownLeft">
          <div className="row px-xl-5">
              <div className="col">
                  <div className="owl-carousel vendor-carousel">
                      <div className="vendor-item border p-4">
                          <img src="assets/img/vendor-1.jpg" alt=""/>
                      </div>
                      <div className="vendor-item border p-4">
                          <img src="assets/img/vendor-2.jpg" alt=""/>
                      </div>
                      <div className="vendor-item border p-4">
                          <img src="assets/img/vendor-3.jpg" alt=""/>
                      </div>
                      <div className="vendor-item border p-4">
                          <img src="assets/img/vendor-4.jpg" alt=""/>
                      </div>
                      <div className="vendor-item border p-4">
                          <img src="assets/img/vendor-5.jpg" alt=""/>
                      </div>
                      <div className="vendor-item border p-4">
                          <img src="assets/img/vendor-6.jpg" alt=""/>
                      </div>
                      <div className="vendor-item border p-4">
                          <img src="assets/img/vendor-7.jpg" alt=""/>
                      </div>
                      <div className="vendor-item border p-4">
                          <img src="assets/img/vendor-8.jpg" alt=""/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
         </React.Fragment>
    );
}

export default Venders