import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DbService } from '../../services/DbService';
import './productDetails.css';

function ProductDetail({Add2Cart}) {

    const [colors,setColors] = useState(false);

    const[product,setProduct] = useState({
        loading: false,
        selPr: {},
        errMsg : ''
    });

    var {pId} = useParams();
    useEffect(async()=>{

       

        console.log("selected product is ", pId)
        //  Get selected product
        const selectedProd =  async()=>{       
                const resp = await DbService.GetPorductsByID(pId)
                return resp;
        }
        var prod = await selectedProd();
        setProduct({...product,selPr:prod[0]});
        console.log(prod);
       //   get all pictures 

       const addPageVisitor =  async()=>{       
        const item = {
            prodId : pId ,
            reveiew: 0,
            rating: 0,
            visitors: 0
         }
            const resp = await DbService.Add_product_review(item)
            return resp;
        }
        var prod = await addPageVisitor();


    },[pId]);
    
  return (
    
    <div className="container-fluid py-5">
        <div className="row px-xl-5">
            <div className="col-lg-5 pb-5">
                

                

                    <div id="product-carousel" className="carousel slide" data-ride="carousel">                      
                    
                    
                    <div className="carousel-inner border">
                       
                        
                        <div className="carousel-item active">
                            <img className="w-100 h-100" src='/assets/img/carousel-1.jpg' />
                        </div>
                        
                    </div>
                    
                    </div>

                
           
            </div>

            <div className="col-lg-5 pb-5">
                
                <h3 className="font-weight-semi-bold mb-4">3000$</h3>
                <p className="mb-4" > Maurice Lacroix Aikon Automatic Chronograph Strap Package - Silver
</p>
                

                {

                   
                }
                <div className="d-flex align-items-center mb-4 pt-2">
                   
                    <button className="btn btn-primary px-3" onClick={()=>Add2Cart('watch')}><i className="fa fa-shopping-cart mr-1"></i> Add To Cart</button>
                </div>
              
            </div>
        </div>
        <div className="row px-xl-5">
            <div className="col">
                <div className="nav nav-tabs  border-secondary mb-4">
                    
                </div>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="tab-pane-1">
                        <h4 className="mb-3">Product Description</h4>
                        <p>AIKON, on the journey to success with the Automatic!
The AIKON collection is the descendant of the Calypso. This benchmark piece the brand's best-belling model of the 1990s already incorporated the AIKON's main distinctive features: the integrated water-resistant case, the flat sapphire crystal encircled by the famous six-arm bezel, the M logo in relief on the leather straps, and exceptionally high-quality production.
With their dynamic angles and pronounced polished and satin-finished surfaces, the AIKON Automatic models have a real presence on the wrist. They also feature a newly designed flexible five-link steel bracelet. Extremely soft and supple, it suits all wrists.
Features
•	44mm
•	Stainless Steel
•	Water resistance to 20 ATM
</p>
                    </div>
                        
                        </div>
                    </div>
                </div>
            </div>
      
    
  )
}

export default ProductDetail