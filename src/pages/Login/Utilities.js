var CryptoJS = require("crypto-js");

export class Utilities{


    static  get_Encrpted=(id) =>{
        return CryptoJS.AES.encrypt(id.toString(), 'secret key 123').toString();
    
    } ;
    
    static get_Decrpted=(encryptedText) =>{
        return CryptoJS.AES.decrypt(encryptedText, 'secret key 123');
    
    } ;

    static validate_email(email){
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      var mailError = "";
      if (!email) {
        mailError = "Email is required!";
      } else if (!regex.test(email)) {
        mailError = "This is not a valid email format!";
      }

      return mailError;
      
    }

    static validate_reset_password(pass,confirmPass){
      var errMsg = "";
     if (pass =="" || confirmPass == "") return  "Password is required";
     if(pass.length < 4)  return  "Password must be more than 4 characters";
     if (pass.length > 10)  return "Password cannot exceed more than 10 characters";
     if (pass != confirmPass) return "confirm password does not match";

     return errMsg;
      
    }

    static validate = (values) => {
        console.log(values);
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.first_name) {
          errors.first_name = "first name is required!";
        }
        if (!values.last_name) {
            errors.last_name = "last name is required!";
          }
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
          errors.password = "Password is required";
        } else if (values.password.length < 4) {
          errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
          errors.password = "Password cannot exceed more than 10 characters";
        }

        if(values.user_type < 1){
            errors.user_type = "user type is required";
        }
        return errors;
      };

}
