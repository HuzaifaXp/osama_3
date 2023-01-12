import React,{ useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { DbService } from '../../services/DbService';
import AddCategories from './AddCategories';
import AddProduct from './AddProduct';
import './Admin.css';

const Admin = () => {
  var navigate = useNavigate();
  useEffect(async() => {

    const loginStatus =  async()=>{      
            var loggedUser = localStorage.getItem('lu');
             if (loggedUser == undefined) navigate('/admin'); 
            const resp = await DbService.getUserLoginStatus(loggedUser)
            return resp;
        }
    var userLogginIn = await loginStatus();
    // if(userLogginIn[0].loggedIn !== 1) navigate("/admin");
   }, [])
    
  return (
    <div>
      <AddCategories />
      <AddProduct />
    </div>
 
  )
}

export default Admin