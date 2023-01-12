import React, { useEffect, useState } from 'react'
import {useLocation} from "react-router-dom";

import './checkout.css'

function CheckOut({selItems}) {
    const search = useLocation().search;
    const [deliveryCharges, setDeliveryCharges] = useState(300);
    const _subtotal =new URLSearchParams(search).get('subTotal');
    const _shipping = new URLSearchParams(search).get('shipping')
    const [subTotal,setSubtotal] = useState(Number(_subtotal));
    const [shipping,setShipping] = useState(Number(_shipping));
    const [total,setTotal] = useState();
    const [fName,setFname] = useState('');
    const [LName,setLname] = useState();
    const [Email,setEmail] = useState();
    const [mobileNo,setMobileNo] = useState();
    const [Address,setAddress] = useState();
    const [City,setCity] = useState();
    const [District,setDistrict] = useState();
    const [Zipcode,setZipCode] = useState();
    

    const setValue=(e)=>{
        console.log(e.target.value);

    }

    useEffect(()=>{
        let sum = 0;
        for (let index = 0; index < selItems.length; index++) {
            sum+= (selItems[index].price * selItems[index].Qty) ;
        }

        setSubtotal(sum);
        setTotal(sum + deliveryCharges);
    })

 


    const handlePayment = (e)=>{
      
        e.preventDefault();

        if(fName =='') 
        {
            alert('fname is required')
            return;
        } 

        if(LName =='') 
        {
            alert('Lname is required',LName)
            return;
        } 

         if(Email =='') 
         {
            console.log(Email)
             alert('Email is required',Email)
             return;
         }

         if(mobileNo =='') 
         {
             alert('Mobile No is required',mobileNo)
             return;
         } 

         if(Address =='') 
         {
             alert('Address is required',Address)
             return;
         }
         if(City =='') 
          {
              alert('City is required',City)
              return;
          }
          if(District =='') 
          {
              alert('Disrtict is required', District)
              return;
          }
          if(Zipcode =='') 
          {
              alert('Zipcode is required', Zipcode)
              return;
          }
            
        
    }

    
  return (
    <div>
        
        <div className="container-fluid pt-5" id="chkOutForm" >
        <div className="row px-xl-5">
            <div className="col-lg-8">
                <div className="mb-4">
                    <h4 className="font-weight-semi-bold mb-4">Billing Address</h4>
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label>First Name<i> *</i></label>
                            <input className="form-control chkOut" type="text" placeholder="Your First-Name" onChange={(e)=> setFname(e.target.value)}/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Last Name<i> *</i></label>
                            <input className="form-control chkOut" type="text" placeholder="Your Last-Name" onChange={(e)=> setLname(e.target.value)}/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>E-mail<i> *</i></label>
                            <input className="form-control chkOut" type="email" placeholder="Email" required="required" onChange={(e)=> setEmail(e.target.value)}/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Mobile No<i> *</i></label>
                            <input className="form-control chkOut" type="PhoneNumber" placeholder="Mobile" onChange={(e)=> setMobileNo(e.target.value)}/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Address Line 1<i> *</i></label>
                            <input className="form-control chkOut" type="text" placeholder="Address" onChange={(e)=> setAddress(e.target.value)}/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Address Line 2</label>
                            <input className="form-control chkOut" type="text" placeholder=""/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Country</label>
                            <select className="custom-select">
                                <option selected>Pakistn</option>
                                
                              
                            </select>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>City<i> *</i></label>
                            <input className="form-control chkOut" type="text" placeholder="" onChange={(e) => setCity(e.target.value) }/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>District<i> *</i></label>
                            <input className="form-control chkOut" type="text" placeholder="" onChange={(e)=> setDistrict (e.target.value)}/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>ZIP Code<i> *</i></label>
                            <input className="form-control chkOut" type="text" placeholder="" onChange={(e)=> setZipCode (e.target.value)}/>
                        </div>
                      
                    </div>
                </div>
              
            </div>
            <div className="col-lg-4">
                <div className="card border-secondary mb-5">
                    <div className="card-header bg-secondary border-0">
                        <h4 className="font-weight-semi-bold m-0">Order Total</h4>
                    </div>
                    <div className="card-body">
                        <h5 className= "Products">Products</h5>
                        


                        <hr className="mt-0"/> 
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-medium">Subtotal</h6>
                            <h6 className="font-weight-medium">{subTotal}</h6>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-medium">Shipping charges</h6>
                            <h6 className="font-weight-medium">{shipping}</h6>
                        </div>
                    </div>
                    <div className="card-footer border-secondary bg-transparent">
                        <div className="d-flex justify-content-between mt-2">
                            <h5 className="font-weight-bold">Total</h5>
                            <h5 className="font-weight-bold">{subTotal + shipping}</h5>
                        </div>
                    </div>
                </div>
                <div className="card border-secondary mb-5">
                    <div className="card-header bg-secondary border-0">
                        <h4 className="font-weight-semi-bold m-0">Payment</h4>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" name="payment" id="paypal"/>
                                <label className="custom-control-label" for="paypal">Cash on delivery</label>
                            </div>
                        </div>
                        
                    </div>
                    <div className="card-footer border-secondary bg-transparent">
                        <button className="btn btn-lg btn-block btn-primary font-weight-bold my-3 py-3" onClick={(e)=>handlePayment(e)}>Place Order</button>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CheckOut