import React from 'react'
import { useState } from 'react';
import { DbService } from '../../services/DbService';
import './Admin.css';
const AddCategories = () => {

  const[category,setCategory] = useState();
  const[file,setFile] = useState();
  const[error,setError] = useState('');
    var handleChange = (e) =>{
      setCategory(e.target.value);
    }

  const saveCategory = async (e)=>{
    setError('');
    if(file == undefined) setError('no files selected')
    if(category == undefined) setError('please select category')    
    if(error !== '') {
      return
    }
    var cat_pic = "/assets/img/catPics/" + file.name
    var category2Save = {name: category, cat_pic: cat_pic};
    console.log(category2Save);
    var SaveCate = async ()=> {
      console.log('asdfafffffffffffffffffffff')
       var resp = await DbService.SaveCategory(category2Save);
       //  Uploading file
       const formData = new FormData();
		   formData.append('file', file);
       var _uploadResp = await DbService.uploadCategoryPic(formData);
    }
    var saveMsg = SaveCate();
  }

  const changedHandler = async (e)=>{
    var files = e.target.files;    
    if(files.length > 0) setFile(files[0]);    
    console.log(file)
  }
  return (
    <div>
    <div className='container'>
        {/* .......................................................... */}
        {/*                Category Name                               */}
        {/* .......................................................... */}
        <div className="signUp-form-group">
           
            <input type="text" name='title' placeholder='category name' 
             onChange={(e)=> handleChange(e) }
             />
      
        </div>

        {/* .......................................................... */}
        {/*                upload file                                 */}
        {/* .......................................................... */}
        <div className="signUp-form-group">
          
            <input type="file" name='file'   multiple 
             onChange={changedHandler }
             />
        <p className="danger"></p>
        </div>

        <div className="signUp-form-group">
          <div className='save-container'>
            <div className='savebtn'> <button className='btn-primary btnSave' onClick={saveCategory} >Save Category</button></div>
            <div className='errorDiv'> <span className="danger">{error}</span> </div>
          </div>
        </div> 
      
        
    </div>
        <div className='seperator'></div>
    </div>
  )
}

export default AddCategories