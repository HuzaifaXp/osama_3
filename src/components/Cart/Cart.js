import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import './cart.css'




const Cart = ({selItems}) => {
    const[subtotal,setSubtotal] = useState(0)
   
    const[shippingPrice,setShippingPrice] = useState(40)

useEffect(() => {
    const itemsFromLocalStorage = localStorage.getItem('items');
    const jsonItems = JSON.parse(itemsFromLocalStorage);
    console.log('from cart',jsonItems[0])
   
        let tt = jsonItems.reduce((accumulator, object) => {
            return accumulator + (Number(object.price) * object.Qty);
          }, 0);
          setSubtotal(tt);
         
   

 console.log(subtotal)
}, [])


  return (

       

    <div className="container-fluid pt-5">
                            
    <div className="row px-xl-5">
        <div className="col-lg-8 table-responsive mb-5">
            <table className="table table-bordered text-center mb-0">
                <thead className="bg-secondary text-dark">
                    <tr>
                        <th>Products</th>
                        <th>Price</th>                        
                        <th>Total</th>
                      
                    </tr>
                </thead>
                <tbody className="align-middle">

                {
                    selItems.length > 0 && selItems.map(item=>{
                        return(
                            <tr key={selItems.id}>
                            <td className="Product-img"><img src={item.imgSrc}/></td>
                            <td className="align-middle">{item.price}</td>
                            
                            <td className="align-middle">{item.Qty * item.price}</td>
                           
                        </tr>

                        )
                    })

                }
                        

                            

                    
                    

                </tbody>
            </table>
        </div>
    

                           <div className="col-lg-4">
                    <form className="mb-5" action="">
                        <div className="input-group">
                            
                            <div className="input-group-append">
                                <a href='/Categories' className="btn btn-primary" >Back to categories</a>
                            </div>
                        </div>
                    </form>

                
                        <div className="card border-secondary mb-5">
                        <div className="card-header bg-secondary border-0">
                            <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
                        </div>
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <h6 className="font-weight-medium">Subtotal</h6>
                                <h6 className="font-weight-medium">{subtotal}</h6>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h6 className="font-weight-medium">Shipping</h6>
                                <h6 className="font-weight-medium">{shippingPrice}</h6>
                            </div>
                        </div>
                        <div className="card-footer border-secondary bg-transparent">
                            <div className="d-flex justify-content-between mt-2">
                                <h5 className="font-weight-bold">Total</h5>
                                <h5 className="font-weight-bold">{subtotal + shippingPrice}</h5>
                            </div>
                            <Link to={"/checkOut?subtotal=" + subtotal + "&shipping=" + shippingPrice} className="btn btn-block btn-primary my-3 py-3" >Proceed To Checkout</Link>
                        </div>
                    </div>
                

                </div>
          
        </div>
                        
    </div>


  )
}


export default Cart