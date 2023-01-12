
import React, { useState,useEffect } from 'react';

import { Link, useParams } from 'react-router-dom'
import Cart from '../../../components/Cart/Cart';

import SliderZafi from '../../../components/Slider';
import { DbService } from '../../../services/DbService';
import ColorsFilter from './ColorsFilter';
import './Men.css'
import './animate.css'
import SizeFilter from './SizeFilter';

function CategoriesBox({handleClick,handlePClick,cart}) {

   
    const [prefered, setPrefered] = useState([]);
    const [selectedPrice, setSelectedPrice] = useState([0, 50000]);
    const [popularity, setPopularity] = useState(false);
    const [bestrating, setBestRating] = useState(false);
    const [latest, setLatest] = useState(false);

    var [search,setSearch] = useState();


 
    const[products,setProducts] = useState({
        loading: false,
        productsList: [],
        errMsg : ''
    });
    

    const sliderHandler = (event, value) =>{
        setSelectedPrice(value) 
    }

    const sortList =(_latest,_popularity,_rating)=>
    {
        console.log('sorting')
        if(_popularity){
            setPopularity(true);
            setBestRating(false);
            setLatest(false);
        }
        if(_rating){
            setPopularity(false);
            setBestRating(true);
            setLatest(false);
        }

        if(_latest){
            setPopularity(false);
            setBestRating(false);
            setLatest(true);
        }
        

    }


 
 const {loading,productsList,errMsg} = products;   

 var {c} = useParams();



  useEffect(async()=>{

    window.scrollTo(0, 0);
  
    const prodList =  async()=>{       
			const resp = await DbService.GetPorducts();
            return resp;
    }
    var list = await prodList();
    // -------------------Category filter
    var categoryWiseProds = '';
    console.log('parameter passed was ',c)
    //  ******************************filters based on passed parameter************************
    //  on sale 
    if(c === 'sale') categoryWiseProds = list.filter(pr=> pr.sale > 0)
    else if(c === 'justArrived') 
    {
        var filterDate = new Date(); 
        filterDate.setDate(filterDate.getDate() - 10); 
        categoryWiseProds = list.filter(x=> new Date(x.DATE_POSTED) > filterDate);
    }
    //  all category wise 
    else 
    {
        console.log('category wise')
        categoryWiseProds = list.filter(pr=> pr.categoryName == c)
    }
    //  *************************************************************************************
    // -------------------Price filter for filter panel
    var  filteredList = categoryWiseProds.filter(pr =>  pr.price >= selectedPrice[0] && pr.price <= selectedPrice[1]);

    // -------------------Searching filter

    if (search!== undefined && search.length > 0){
        filteredList = filteredList.filter((item) => item.title.toLowerCase().search(search.toLowerCase().trim()) !==-1 )}
        
    console.log('actual list',list);
    console.log('filtered list ',filteredList);
    //  ********************************************************************************Sort filters START
    //  applying paularity filter
    if(popularity)  filteredList.sort((a, b) => (a.visitors < b.visitors) ? 1 : -1)

    if(latest)  filteredList.sort((a, b) => (a.DATE_POSTED < b.DATE_POSTED) ? 1 : -1)
    

    //  **********************************************************************************Sort filters END
    setProducts({...products,productsList:filteredList});
//   console.log('mens dresses page loaded with parameters', selectedPrice)
console.log('search term is ', search)
},[c,selectedPrice,search,bestrating,latest,popularity]);

  return (
    
    <div>
    {
            (c === 'sale') && productsList.length < 1 &&
            <div className='noItems'>
                <h3>currently we have nothing on sale</h3>
                <Link to="/" className="nav-item nav-link  backbtn">Go Back</Link>
            </div>
    }
   
    <div className="container-fluid pt-5">       
        <div className="row px-xl-5">           
            <div className="col-lg-3 col-md-12">               
                {
                    productsList.length > 1 &&
                        <div>
                            <div className="border-bottom mb-4 pb-4">
                                <h5 className="font-weight-semi-bold mb-4">Filter by price</h5>

                                <SliderZafi value={selectedPrice} changePrice={sliderHandler} />
                            </div>               
                            <ColorsFilter />
                            <SizeFilter />
                        </div>
               }
             
            </div>

            <div className="col-lg-9 col-md-12">
                <div className="row pb-3">
                    {
                        productsList.length > 1 &&
                            <div className="col-12 pb-1">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <form action="">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search by asdfsdf" onChange={(e)=> setSearch(e.target.value) } />
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
                                            <button className="dropdown-item" onClick={()=> sortList(true,false,false)}>Latest</button>
                                            <button className="dropdown-item" onClick={()=> sortList(false,true,false)}>Popularity</button>                            
                                            <button className="dropdown-item" onClick={()=> sortList(false,false,true)}>Best Rating</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    }
                    

                    {
                        loading == false && productsList.length > 0 && productsList.map(prod=> {
                            return(
                                <div className="col-lg-4 col-md-6 col-sm-12 pb-1 prod_card lightSpeedInRight" key={prod.id}>
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
                                        <button  onClick={()=>handlePClick(prod)} className="btn btn-sm text-dark p-0"> <i className="fas fa-heart text-primary"></i></button>                                       
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

export default CategoriesBox