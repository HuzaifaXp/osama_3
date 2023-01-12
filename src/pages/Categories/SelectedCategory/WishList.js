
import React, { useState,useEffect } from 'react';

import { Link, useParams } from 'react-router-dom'
import Cart from '../../../components/Cart/Cart';

import SliderZafi from '../../../components/Slider';
import { DbService } from '../../../services/DbService';
import './Men.css'

function WishList({preferedProducts,handleClick}) {

    const [prefered, setPrefered] = useState([]);
    const [selectedPrice, setSelectedPrice] = useState([0, 50000]);
    const [popularity, setPopularity] = useState(false);

    var [search,setSearch] = useState();
    
 
    const[products,setProducts] = useState({
        loading: false,
        productsList: [],
        errMsg : ''
    });

    const sliderHandler = (event, value) =>{
        
        setSelectedPrice(value) 

    }


 
 const {loading,productsList,errMsg} = products;   

 var {c} = useParams();



  useEffect(async()=>{
  

    // -------------------Price filter
    var  filteredList = preferedProducts.filter(pr =>  pr.price >= selectedPrice[0] && pr.price <= selectedPrice[1]);

    // -------------------Searching filter
    if (search!== undefined && search.length > 0){
        filteredList = filteredList.filter((item) => item.title.toLowerCase().search(search.toLowerCase().trim()) !==-1 )}
  
    console.log('filtered list ',filteredList);
    //  ********************************************************************************Sort filters START
    //  applying paularity filter
    if(popularity)  filteredList.sort((a, b) => (a.visitors < b.visitors) ? 1 : -1)

    //  **********************************************************************************Sort filters END
    setProducts({...products,productsList:filteredList});
//   console.log('mens dresses page loaded with parameters', selectedPrice)

},[c,selectedPrice,search,popularity]);

  return (
    <div>

        <div className='wishlist-clear-div'>
                <button onClick={()=>  setPrefered([]) }>Clear Wish List</button>
        </div>

    {/* <!-- Shop Start --> */}
    <div className="container-fluid pt-5">
        
    n 
        <div className="row px-xl-5">
            {/* <!-- Shop Sidebar Start --> */}
            <div className="col-lg-3 col-md-12">
                {/* <!-- Price Start --> */}
                <div className="border-bottom mb-4 pb-4">
                    <h5 className="font-weight-semi-bold mb-4">Filter by price</h5>

                    <SliderZafi value={selectedPrice} changePrice={sliderHandler} />
                </div>
                {/* <!-- Price End --> */}
                
                {/* <!-- Color Start --> */}
                <div className="border-bottom mb-4 pb-4">
                    <h5 className="font-weight-semi-bold mb-4">Filter by color</h5>
                    <form>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input"  id="color-all" />
                            <label className="custom-control-label" for="price-all">All Color</label>
                            <span className="badge border font-weight-normal">1000</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="color-1" />
                            <label className="custom-control-label" for="color-1">Black</label>
                            <span className="badge border font-weight-normal">150</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="color-2" />
                            <label className="custom-control-label" for="color-2">White</label>
                            <span className="badge border font-weight-normal">295</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="color-3" />
                            <label className="custom-control-label" for="color-3">Red</label>
                            <span className="badge border font-weight-normal">246</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="color-4" />
                            <label className="custom-control-label" for="color-4">Blue</label>
                            <span className="badge border font-weight-normal">145</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                            <input type="checkbox" className="custom-control-input" id="color-5" />
                            <label className="custom-control-label" for="color-5">Green</label>
                            <span className="badge border font-weight-normal">168</span>
                        </div>
                    </form>
                </div>
                {/* <!-- Color End --> */}

                {/* <!-- Size Start --> */}
                <div className="mb-5">
                    <h5 className="font-weight-semi-bold mb-4">Filter by size</h5>
                    <form>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input"  id="size-all" />
                            <label className="custom-control-label" for="size-all">All Size</label>
                            <span className="badge border font-weight-normal">1000</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="size-1" />
                            <label className="custom-control-label" for="size-1">XS</label>
                            <span className="badge border font-weight-normal">150</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="size-2" />
                            <label className="custom-control-label" for="size-2">S</label>
                            <span className="badge border font-weight-normal">295</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="size-3" />
                            <label className="custom-control-label" for="size-3">M</label>
                            <span className="badge border font-weight-normal">246</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="size-4" />
                            <label className="custom-control-label" for="size-4">L</label>
                            <span className="badge border font-weight-normal">145</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                            <input type="checkbox" className="custom-control-input" id="size-5" />
                            <label className="custom-control-label" for="size-5">XL</label>
                            <span className="badge border font-weight-normal">168</span>
                        </div>
                    </form>
                </div>
                {/* <!-- Size End --> */}
            </div>
            {/* <!-- Shop Sidebar End --> */}


            {/* <!-- Shop Product Start --> */}
            <div className="col-lg-9 col-md-12">
                <div className="row pb-3">
                    <div className="col-12 pb-1">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <form action="">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search by name" onChange={(e)=> setSearch(e.target.value) } />
                                    <div className="input-group-append">
                                        <span className="input-group-text bg-transparent text-primary">
                                            <i className="fa fa-search"></i>
                                        </span>
                                    </div>
                                </div>
                            </form>
                            <div className="dropdown ml-4">
                                <button className="btn border dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                            Sort by
                                        </button>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="triggerId">
                                    <a className="dropdown-item" href="#">Latest</a>
                                    <button className="dropdown-item" onClick={()=> setPopularity(true)}>Popularity</button>
                                    <a className="dropdown-item" href="#">Best Rating</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {

                        loading == false && productsList.length > 0 && productsList.map(prod=> {
                            return(
                                <div className="col-lg-4 col-md-6 col-sm-12 pb-1 prod_card" key={prod.id}>
                                <div className="card product-item border-0 mb-4">
                                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                        <Link to={"/DetailPage/" + prod.id} >
                                            <div className='prod_card'>
                                                <img className="img-fluid w-100 p9" src={prod.picture} alt="" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                        <h6 className="text-truncate mb-3">{prod.title}</h6>
                                        <div className="d-flex justify-content-center">
                                            <h6>${prod.price}</h6><h6 className="text-muted ml-2"><del>${prod.price + 25}</del></h6>
                                        </div>
                                    </div>
                                    <div className="card-footer d-flex justify-content-between bg-light border">
                                        <Link to={"/DetailPage/" + prod.id} className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</Link>
                                       
                                        <button className="btn btn-sm text-dark p-0"  onClick={()=>handleClick(prod)}><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</button>
                                    </div>
                                </div>
                            </div>

                            )


                        })
                    }


                </div>
            </div>
            {/* <!-- Shop Product End --> */}
        </div>
    </div>
    {/* <!-- Shop End --> */}


    </div>
  )
}

export default WishList