import React,{ useState, useEffect } from 'react'
import { DbService } from '../../services/DbService';
import { useNavigate } from 'react-router-dom';
import './Admin.css';


const AddProduct = () => {
  const[file,setFile] = useState();
  const[eName,setEname] = useState();
  const[eDetail,setEdetail] = useState();
  const[eQuantity,setEquantity] = useState();
  const[ePprice,setEpprice] = useState();
  const[eSPrice,setEsprice] = useState();
  const[eSupplier,setEsupplier] = useState();
  const[eBrand,setEbrand] = useState();
  const[eCategory,setECategory] = useState();
  const[eFile,setEfile] = useState();
  
  const[pName,setPName] = useState();
  const[detail,setDetail] = useState();
  const[quantity,setQuantity] = useState();
  const[PurchasePrice,setPurchasePrice] = useState();
  const[salePrice,setSalePrice] = useState();
  const[suplierDetail,setSuplierDetail] = useState();
  const[brand,setBrand] = useState();
  const[category,setCategory] = useState();

    const[categories,setCategories] = useState({
        loading: false,
        categoriesList: [],
        errMsg : ''
      });
    
    const[brands,setBrands] = useState({
      brand_loading: false,
      brandsList: [],
      brand_errMsg : ''
    });

    var handleChange = (e) =>{
      console.log(e.target.name)
      if(e.name = 'name') setPName(e.target.value);
      if(e.name = 'detail') setDetail(e.target.value);
      if(e.name = 'quantity') setQuantity(e.target.value);
      if(e.name = 'purchasePrice') setPurchasePrice(e.target.value);
      if(e.name = 'salePrice') setSalePrice(e.target.value);
      if(e.name = 'supplier') setSuplierDetail(e.target.value);
      if(e.name = 'brand') setBrand(e.target.value);
      if(e.name = 'category') setCategory(e.target.value);
    }
    var isValid = ()=>{
     
      var _retValue = true;
      if(pName === undefined) {
        setEname('name required');
        _retValue = false;
      }
      if(detail === undefined) {
        setEdetail('detail required');
        _retValue = false;
      }
      if(quantity === undefined) {
        setEquantity('quantity required');
        _retValue = false;
      }
      if(PurchasePrice === undefined) {
        setEpprice('purchase price required');
        _retValue = false;
      }
      if(salePrice === undefined) {
        setEsprice('sale price required');
        _retValue = false;
      }
      if(suplierDetail === undefined) {
        setEsupplier('supplier required');
        _retValue = false;
      }
      if(brand === undefined) {
        setEbrand('brand required');
        _retValue = false;
      }
      if(category === undefined) {
        setECategory('category required');
        _retValue = false;
      }
      if(file === undefined) {
        setEfile('file required');
        _retValue = false;
      }
      return _retValue;
    }
    const saveProduct =  (e)=>{
      e.preventDefault();
      if (! isValid()) return;
      // var cat_pic = "/assets/img/catPics/" + file.name
      // var category2Save = {name: category, cat_pic: cat_pic};
      // console.log(category2Save);
      // var SaveCate = async ()=> {
        
      //    var resp = await DbService.SaveCategory(category2Save);
      //    //  Uploading file
      //    const formData = new FormData();
      //    formData.append('file', file);
      //    var _uploadResp = await DbService.uploadCategoryPic(formData);
      // }
      // var saveMsg = SaveCate();
    }

    const {loading,categoriesList,errMsg} = categories;   
    const {brand_loading,brandsList,brand_errMsg} = brands;  

    useEffect(async() => {

      

        const categoriesList =  async()=>{       
                const resp = await DbService.GetCategories();
                return resp;                
        }
        var _categories = await categoriesList();    
        setCategories({...categories,categoriesList:_categories});
    
        //  ------------------------------------------------------------
    
        const brandsList =  async()=>{       
                const resp = await DbService.GetBrands();
                return resp;
        }
        var _brands = await brandsList();    
        setBrands({...brands,brandsList:_brands});
       }, [])
  return (
    <div className='container'>
        {/* .......................................................... */}
        {/*                name                                        */}
        {/* .......................................................... */}
        <div className="signUp-form-group">
          
            <input type="text" name='name' placeholder='product name' 
             onChange={(e)=>handleChange(e) }
             />
        <p className="danger">{eName}</p>
        </div>

        {/* .......................................................... */}
        {/*                detail                                        */}
        {/* .......................................................... */}

        <div className="signUp-form-group">
           
            <input type="text" name='detail' placeholder='detail' 
             onChange={(e)=>handleChange (e) }
             />
          <p className="danger">{eDetail}</p>
        </div>

        <div className="signUp-form-group">
          
            <input type="text" name='quantity' placeholder='Quantity' 
             onChange={(e)=>handleChange (e) }
             />
        <p className="danger">{eQuantity}</p>
        </div>

        <div className="signUp-form-group">
           
            <input type="text" name='purchasePrice' placeholder='Purchase Price' 
             onChange={(e)=>handleChange (e) }
             />
       <p className="danger">{ePprice}</p>
        </div>
        <div className="signUp-form-group">
           
            <input type="text" name='salePrice' placeholder='Sale Price' 
             onChange={(e)=>handleChange (e) }
             />
          <p className="danger">{eSPrice}</p>
        </div>

        <div className="signUp-form-group">
           
            <input type="text" name='supplier' placeholder='Supplier detail' 
             onChange={(e)=>handleChange (e) }
             />
        <p className="danger">{eSupplier}</p>
        </div>
        {/* .......................................................... */}
        {/*                brand                                        */}
        {/* .......................................................... */}
        <div className="signUp-form-group">
        <label >Brand:</label>

        <select name="brand" onChange={(e)=> handleChange(e)} >
        <option value="0" defaultValue={0}>Select</option>
          {
             brand_loading == false && brandsList.length > 0 && brandsList.map(brand=> {
              return(
              <option value={brand.id} key={brand.id}>{brand.name}</option>
              )
            })
          }           
        </select>
        <p className="dangerddl">{eBrand}</p>
        </div> 
        {/* .......................................................... */}
        {/*                category                                     */}
        {/* .......................................................... */}
        <div className="signUp-form-group">
        <label >Category</label>
        <select name="category"  onChange={(e)=> handleChange(e)} >
        <option value="0" defaultValue={0}>Select</option>
        {
             loading == false && categoriesList.length > 0 && categoriesList.map(cat=> {
              return(
                <option value={cat.id} key={cat.id}>{cat.name}</option>
              )
            })
        }       
        </select>
        <p className="dangerddl">{eCategory}</p>
        </div> 
         <div className="signUp-form-group">
          
            <input type="file" name='files'   multiple onChange={(e)=>handleChange (e) }/>
       
        </div>
        <p className="dangerFile">{eFile}</p>
        <div className="signUp-form-group">
           <button className='btn-primary btnSave' onClick={saveProduct}>Save Product</button>
        </div>  
                

  </div>
  )
}

export default AddProduct