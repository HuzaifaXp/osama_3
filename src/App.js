

import React, { useState,useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import CheckOut from './components/Cart/CheckOut';

import NavBar from './components/NavBar';
import Admin from './pages/Admin/Admin';
import Categories from './pages/Categories/Categories';
import CategoriesBox from './pages/Categories/SelectedCategory/CategoriesBox';

import WishList from './pages/Categories/SelectedCategory/WishList';
import Footers from './pages/Footers/Footers';
import Carousel from './pages/Home/carousel';
import EmailConfirmation from './pages/Login/EmailConfirmation';
import SignUp2 from './pages/Login/SignUp2';
import ProductDetail from './pages/ProductDetail/ProductDetail';


function App() {
  const[selItems,setSelItems] = useState([])

  

  const Add2Cart = (itemDetail)=>{
    console.log('function called')
    var  item = {};
    if(itemDetail =='watch') item ={id:1,Qty:1,price: 900, imgSrc:'/assets/img/carousel-1.jpg'}
    if(itemDetail =='mic') item ={id:2,Qty:1,price: 1000, imgSrc:'/assets/img/carousel-2.jpg'}
    if(itemDetail =='baloon') item ={id:3,Qty:1,price: 2000, imgSrc:'/assets/img/carousel-3.jpg'}

    setSelItems([...selItems,item])
    const jsonItems = JSON.stringify(selItems);
    console.log(jsonItems);
    localStorage.removeItem('items')
    localStorage.setItem('items', jsonItems)
}



  const RemQty =(item)=>{
    
    setSelItems([...selItems,item])
    }
useEffect(() => {
  const itemsFromLocalStorage = localStorage.getItem('items');
  const jsonItems = JSON.parse(itemsFromLocalStorage);
  console.log('already stored items in localStorage are ', itemsFromLocalStorage)
  if(itemsFromLocalStorage != null) setSelItems(...selItems,jsonItems)

  console.log(selItems)

 
  
}, [])

 
  return (
<React.Fragment>

<NavBar itemsInCart={selItems.length}  />
<Routes>
  <Route path='/' element={<Carousel />}></Route>
  <Route  path='/selectedCategory/:c' element={<CategoriesBox />}></Route>
  <Route  path='/DetailPage/:pId' element={<ProductDetail />} ></Route>
  <Route  path='/cart' element={<Cart selItems={selItems} />}></Route>
  <Route  path='/checkOut' element={<CheckOut selItems={selItems}  />}></Route> 
  <Route  path='/Categories' element={<Categories Add2Cart={Add2Cart}/>} ></Route>
  <Route  path='/productdetails' element={<ProductDetail Add2Cart={Add2Cart}/>} ></Route>
  
 
</Routes>
<Footers />


</React.Fragment>
  );
}

export default App;
