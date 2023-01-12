import React ,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import './style.css'

function EmailConfirmation() {

  
  const {login} = useParams();
  console.log(' param is ',login);
  const[param,setParam] = useState(login);

  useEffect(() => {

  
    
  }, [login])
  
  return (
    
<React.Fragment>
          <div className="wrapperDiv">
            {console.log(' login is ',login)}
          {
             param == 1 && 
            <div className="msg">
                <h3>Dear user your profile is still not confirmed</h3>
                <hr />

                <p>An email had been sent to you for the confirmation of your account. Kindly click the link from your mail box in order to confirm your account</p>

            </div>
          }
          {
             param == undefined && 
             <p>An email has been sent to you for the confirmation of your account. Kindly click the link from your mail box in order to confirm your account</p>
          }

          {
             param == 2 && 
             <p>An email has been sent with the instructions to reset your password, check your inbox and follow the instructions</p>
          }

          {
             param == 3 && 
             <p>Your password has been changed </p>
          }


        
          
            <Link to="/" className='backBtn'>Back</Link>
          </div>

</React.Fragment>

  )
}

export default EmailConfirmation