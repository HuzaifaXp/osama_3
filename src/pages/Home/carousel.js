import React from 'react'
import { Link } from 'react-router-dom'
import './carousel.css'
import './homeAnimate.css'

const handleProduct = ()=>{
    
}

function Carousel() {
  return (
    <div>
        
        <div id="header-carousel" className="carousel slide fadeIn" data-ride="carousel ">
                    <div className="carousel-inner">
                        <div className="carousel-item  h410" >
                            <img className="img-fluid watch" src="assets/img/carousel-1.jpg" alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3 mx-w-700" >
                                    <h4 className="text-light text-uppercase font-weight-medium mb-4">10% Off Your First Order</h4>
                                    <h3 className="display-4 text-white font-weight-semi-bold mb-4">Smart watches</h3>
                                    <Link to="/Categories" className="btn btn-light py-2 px-3" onClick={()=>handleProduct}>Shop Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item active h410" >
                            <img className="img-fluid" src="assets/img/carousel-2.jpg" alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3 mx-w-700" >
                                    <h4 className="text-light text-uppercase font-weight-medium mb-4">10% Off Your First Order</h4>
                                    <h3 className="display-4 text-white font-weight-semi-bold mb-4">Podcast mic</h3>
                                    <Link to="/Categories" className="btn btn-light py-2 px-3" onClick={()=>handleProduct}>Shop Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item h410" >
                            <img className="img-fluid" src="assets/img/carousel-3.jpg" alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3 mx-w-700" >
                                    <h4 className="text-light text-uppercase font-weight-medium mb-4">10% Off Your First Order</h4>
                                    <h3 className="display-4 text-white font-weight-semi-bold mb-4">Balloons</h3>
                                    <Link to="/Categories" className="btn btn-light py-2 px-3" onClick={()=>handleProduct}>Shop Now
                                    </Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                        <div className="btn btn-dark w45-h45" >
                            <span className="carousel-control-prev-icon mb-n2"></span>
                        </div>
                    </a>
                    <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                        <div className="btn btn-dark w45-h45" >
                            <span className="carousel-control-next-icon mb-n2"></span>
                        </div>
                    </a>
                </div>
    </div>
  )
}

export default Carousel