import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css'
import './navAnimate.css'

function NavBar({itemsInCart,wishListSize}) {
    const[catClass,setCatClass] = useState("show");
    const[categories,setCategories] = useState({
        loading: false,
        categoriesList: [],
        errMsg : ''
    });
   
    const {loading,categoriesList,errMsg} = categories;    
useEffect(async()=>{
   
  
    

},[]);

    
  return (
    <div>
           {/* <!-- Topbar Start --> */}
   
    
    <div className="container-fluid mb-5 menu navFadeIn">
        <div className="row border-top px-xl-5">
            <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 menu">
                   
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0">
                     
                <Link to="/" className="text-decoration-none">
                    <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold  px-3 mr-1">itsMS</span>Smith</h1>
                </Link>
                
            
                            
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle cat-btn" data-toggle="dropdown">Categories</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <Link to="/Categories"className="dropdown-item" >Watches</Link>
                                    <Link to="/Categories"className="dropdown-item" >Mic Podcasts </Link>
                                    <Link to="/Categories"className="dropdown-item" >Baby's Dresses</Link>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-lg-3 col-6 text-right">
                            <Link  to={"/cart"} className="btn border" >
                                <i className="fas fa-shopping-cart text-primary cart-icon"></i>{itemsInCart}
                            </Link>
                        </div>
                    </div>
                </nav>
              
            </div>
        </div>
    </div>
       
   
                {/* { homepage && <Carousel />   }
                { !homepage && <MensDress />   } */}

</div>
  )
}

export default NavBar