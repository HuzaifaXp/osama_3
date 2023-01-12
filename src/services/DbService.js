import axios from "axios";

export class DbService
{
   
    static async uploadCategoryPic(file){
        const urlApi = 'http://localhost:5000/api/uploadCat';
        var rep = await axios.post(urlApi,file);

        return rep;
    }

    static async uploadProdPic(file){
        const urlApi = 'http://localhost:5000/api/UploadProd';
        var rep = await axios.post(urlApi,file);

        return rep;
    }
    //

    static async Register_user(body_data)
    {
        const urlApi = 'http://localhost:5000/api/users/Register';
        
        const resp  =  await axios.post(urlApi,body_data);

        return resp;
    }

    static async setLoginStatus(user)
    {
        const urlApi = `http://localhost:5000/api/admin/setLoginStatus/${user}`
        
        const resp  =  await axios.put(urlApi,user);

        return resp;
    }

    static async unSetLoginStatus(user)
    {
        const urlApi = `http://localhost:5000/api/admin/unSetLoginStatus/${user}`
        
        const resp  =  await axios.put(urlApi,user);

        return resp;
    }

    static async getUserLoginStatus(user)
    {
        var api = `http://localhost:5000/api/admin/userStatus/${user}`;
        const rep = await axios.get(api);
        return rep.data
    }

    static async SaveCategory(NewCategory){
        var api = 'http://localhost:5000/api/categories';
        const rep = await axios.post(api,NewCategory);
        return rep.data;
    }

    static async GetCategories()
    {
        var api = 'http://localhost:5000/api/categories';
        const rep = await axios.get(api);
        return rep.data
    }
    
    static async GetBrands()
    {
        var api = 'http://localhost:5000/api/brands';
        const rep = await axios.get(api);
        return rep.data
    }
    

    static async GetPorducts()
    {
        var api = 'http://localhost:5000/api/products/allProducts';
        const rep = await axios.get(api);
        return rep.data
    }


    static async GetPorductsByID(id)
    {
        var api = `http://localhost:5000/api/products/allProducts/${id}`;
        const rep = await axios.get(api);
        return rep.data
    }

    static async Get_Pics_by_Product(product_id)
    {
        var api = `http://localhost:5000/api/prodPics/${product_id}`;
        const rep = await axios.get(api);
        return rep.data
    }

    static async Add_product_review(body_data)
    {
        const urlApi = `http://localhost:5000/api/products_review`;
        
        const resp  =  await axios.post(urlApi,body_data,{
            auth: {
                username: 'nomi',
                password: 'nominomi' 
              }
        });

        return resp;
    }


    static async Login(body_data)
    {
        const urlApi = `http://localhost:5000/api/admin/login`;
        
        const resp  =  await axios.post(urlApi,body_data,{
            auth: {
                username: 'nomi',
                password: 'nominomi' 
              }
        });

        return resp;
    }





    
}
