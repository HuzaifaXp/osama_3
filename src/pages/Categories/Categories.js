import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

function Categories({Add2Cart}) {

    return (
        <React.Fragment>
            <div className="col-lg-12 col-md-12">
                <div className="row pb-3">
                    
                                <div className="col-lg-4 col-md-6 col-sm-12 pb-1 prod_card">
                                <div className="card product-item border-0 mb-4">
                                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                       
                                        <Link to="/productDetails" >
                                            <div className='prod_card'>
                                                <img className="img-fluid w-100 p9"src="/assets/img/carousel-1.jpg" />
                                            </div>

                                        </Link>
                                    </div>
                                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                        <h6 className="text-truncate mb-3"></h6>
                                        <div className="d-flex justify-content-center">
                                            <h6>3000$</h6><h6 className="text-muted ml-2"></h6>
                                        </div>
                                    </div>
                                    <div className="card-footer d-flex justify-content-between bg-light border">
                                
                                        <Link to="/productDetails"className="btn btn-sm text-dark p-0" ><i className="fas fa-eye text-primary mr-1"></i>View Detail</Link>
                                                                           
                                        <button className="btn btn-sm text-dark p-0" onClick={()=>Add2Cart('watch')}><i className="fas fa-shopping-cart text-primary mr-1" ></i >Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 pb-1 prod_card">
                                <div className="card product-item border-0 mb-4">
                                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                    <Link to="/productDetails" >
                                            <div className='prod_card'>
                                                <img className="img-fluid w-100 p9"src="/assets/img/carousel-2.jpg" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                        <h6 className="text-truncate mb-3"></h6>
                                        <div className="d-flex justify-content-center">
                                            <h6>3100$</h6><h6 className="text-muted ml-2"></h6>
                                        </div>
                                    </div>
                                    <div className="card-footer d-flex justify-content-between bg-light border">
                                    <Link to="/productDetails"className="btn btn-sm text-dark p-0" ><i className="fas fa-eye text-primary mr-1"></i>View Detail</Link>
                                                                            
                                        <button className="btn btn-sm text-dark p-0" onClick={()=>Add2Cart('mic')}><i className="fas fa-shopping-cart text-primary mr-1"  ></i>Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 pb-1 prod_card">
                                <div className="card product-item border-0 mb-4">
                                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                        <Link to="/productDetails" >
                                            <div className='prod_card'>
                                                <img className="img-fluid w-100 p9"src="/assets/img/carousel-3.jpg" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                        <h6 className="text-truncate mb-3"></h6>
                                        <div className="d-flex justify-content-center">
                                            <h6>3$</h6><h6 className="text-muted ml-2"></h6>
                                        </div>
                                    </div>
                                    <div className="card-footer d-flex justify-content-between bg-light border">
                                    <Link to="/productDetails"className="btn btn-sm text-dark p-0" ><i className="fas fa-eye text-primary mr-1"></i>View Detail</Link>
                                                                         
                                        <button className="btn btn-sm text-dark p-0"  onClick={()=>Add2Cart('baloon')}><i className="fas fa-shopping-cart text-primary mr-1" ></i>Add To Cart</button>
                                    </div>
                                </div>
                            </div>


                </div>
            </div>
    
   
        
        </React.Fragment>
    );
}

export default Categories;