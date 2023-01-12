import axios from 'axios'
import React, { useState, useRef,useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import emailjs from 'emailjs-com'
import {useSelector,useDispatch} from 'react-redux'
import { increment, is_user_logged, set_Logged_user } from '../../Redux/features/LoggedUser'
import { Utilities } from './Utilities'
import './SignUp.css';
import GoogleLogin from 'react-google-login'
import { DbService } from '../../services/DbService'


function SignUp2() {
    const [query,setQuery] = useState();
  const navigate = useNavigate();

  const {q} = useParams();
  console.log (q)

  const form = useRef();
  const dispatch = useDispatch();
    const userState  = useSelector(state=>{
        return state["LoggedUser"]
    })

    
    const initialValues = { first_name: "", last_name:"",email: "", password: "" , user_type: 0};
    const [newUser, setNewUser] = useState(initialValues);
    const [loginUser, setLoginUser] = useState();
    const [password, setPassword] = useState();
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const[userExists,SetuserExists] = useState(false);
    const[usercreated,setUserCreated] = useState(true)
    const[newUserId,setNewUserId] = useState();
   
    const [act_link,setAct_link] = useState("");

    const handleChange = (e) => {
       
        setLoginUser(e.target.value);
      };
   //handlePassowrdChange
   const handlePassowrdChange = (e) => {
    setPassword(e.target.value);
  };
    //  .............................................................
    //  ...............EMAIL SENDDER---------------
    const sendMail = async() => {
        emailjs.sendForm('service_q4cvzp2', 'template_bzbh3cc', form.current, 'aSastUKVNUkOOqyhD')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
       //  .............................................................
    

    const handleSubmit = async(e) => {
        e.preventDefault();
        // setFormErrors(Utilities.validate(newUser));       
        // setIsSubmit(true);
        var parameters = {
            name: loginUser,
            password: password
        }
        const login_result =  async()=>{     
            const resp = await DbService.Login(parameters)
                return resp;
            }
        var loginResult = await login_result();
        console.log(loginResult)
        if(loginResult.data == 'OK') 
        {
            console.log('setting login status now')
            const setLoginStatus =  async()=>{     
                const resp = await DbService.setLoginStatus(loginUser)
                    return resp;
                }
            var loginStatus = await setLoginStatus();
            localStorage.setItem('lu',loginUser);
            setTimeout(async() => {
                await DbService.unSetLoginStatus(loginUser)
            }, (60000 * 60));
            navigate('/huzaifa')
           
        }
        else alert('your credentials are not correct')
      };

    //  .............................................................
    //                  Google Login Handlers
    //  .............................................................
    const handleOnSuccess=(googleData)=> {
        const {...userDetail} = googleData.profileObj
        console.log('login successfull ------',userDetail.email)
    
    }
    const handleOnFailure=(result)=> console.log('loging failed',result)
    //  .............................................................
    //  .............................................................

      const createUser=async()=>{
     
        // const mailResp = await sendEmail();
        // e.preventDefault();
       
       console.log(newUser);
        const apiURL = 'http://localhost:5000/api/users/Register';
       
        SetuserExists(false);
       

        const regUser =  async()=>{       
          const apiResp =  DbService.Register_user();
                return apiResp;
        }
        var resp = await regUser();
        console.log('user added , result is   ' , resp.data.insertId)

            console.log('user added , result is   ' , resp.data.insertId)
            if(resp.data !== undefined && resp.data.insertId > 0 )
            {
              console.log('user added , result is   ' , resp.data[0])
                const id = resp.data.insertId;
                const act_link =  Utilities.get_Encrpted(id);
                setAct_link(`http://localhost:3000/confirmEmail/${act_link}`);
                console.log('activation link is ' , act_link)
                console.log('user created with id  ' , id)
                sendMail();
              
                //  set sessions
                setUserCreated(true);
                setNewUserId(id);
             
                //  reset the fields
                setNewUser(initialValues);
                //  caching users detail and logged status

                // dispatch(is_user_logged(true));
                // dispatch(set_Logged_user(newUser));
                navigate("/emailConfirmation")

            }
            else {
                SetuserExists(true);
                
            }
          
    }

    useEffect(async() => {

      window.scrollTo(0,0);
      setQuery('login');
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log("all is ok, now i will create user")
          await createUser();
        }
      }, [formErrors]);

    
     

    
  return (
    <React.Fragment>

  

        <form name="frm_email"  ref={form} onSubmit={(e)=> e.preventDefault()}>
    {/*--------------------------------------------------------------------------------------- login section */}

        {

            query!= undefined && query === 'register' && 
                            <div className="wrapper">
                            <div className="formWrapper animate__animated animate__zoomIn">
                                <div className="formDiv">
                                    <h2>Create Account</h2>
                                    <p>Sign up with Google Account</p>
                                    <div className="socialBtn">
                                    
                                        <GoogleLogin 
                                                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                                                render={renderProps => (
                                                  <div className="signup-icon facebook" onClick={renderProps.onClick}> <i className="fab fa-google"></i></div>
                                                  )}
                                                buttonText='Login with google'
                                                onSuccess={handleOnSuccess}
                                                onFailure={handleOnFailure}
                                                cookiePolicy='single_host_origin'
                                                className="polo-btn google-button">
                                        </GoogleLogin>  
                                    
                                        {/* <div className="signup-icon facebook"><i className="ion-social-facebook"></i></div>
                                        <div className="signup-icon instagram"><i className="ion-social-twitter"></i></div> */}
                                    </div>
                                    <hr />  
                                    <div className="orDiv">OR</div>
                               
                                    <div className="signUp-form-group">
                                        <i className='ion-person'></i>
                                        <input type="text" name='first_name' placeholder='frist name' 
                                        onChange={handleChange }
                                        />
                                        <p className="danger">{formErrors.first_name}</p>
                                    </div>
                                    <div className="signUp-form-group">
                                        <i className='ion-person'></i>
                                        <input type="text" name='last_name' placeholder='last name'
                                        onChange={handleChange } />
                                        <p className="danger">{formErrors.last_name}</p>
                                    </div>
                                    <div className="signUp-form-group">
                                    
                                        <i className='ion-email'></i>
                                        
                                        <input type="email" name='email' placeholder='email'
                                        onChange={handleChange} />
                                        <p className="danger">{formErrors.email}</p>
                                        
                                    </div>
                                    <div className="signUp-form-group">
                                    <i className='ion-locked'></i>
                                        <input type="password" name='password' placeholder='password'
                                        onChange={handleChange } />
                                        <p className="danger">{formErrors.password}</p>
                                        <input type="hidden" name="message" placeholder='' value={act_link}/>
                                    </div>
                              
                                        <p className="danger-u">{formErrors.user_type}</p>

                                        <div className="checkBox">
                                        {/* <input type="checkbox" name='checkbox' id="checkbox" /> */}
                                        <span> By clicking Sign Up button, you are agreeing with terms and conditions</span>
                                    </div>
                                    <button className='btn-signup' onClick={handleSubmit}>Sign Up</button>
                                </div>
                                <div className="welcomeDiv  animate__animated fadeIn">
                                    <h1>welcome to our service</h1>
                                </div>
                            </div>
                        </div>
            }
           
      {/*--------------------------------------------------------------------------------------- login section */}
            {
                query!= undefined && query === 'login' &&


                    <div className="wrapper">
                    <div className="formWrapper animate__animated animate__zoomIn">
                        <div className="formDiv">
                            <h2>Login Account</h2>
                        
                          
                            <div className="signUp-form-group">
                            
                                <i className='ion-email'></i>
                                
                                <input type="email" name='email' placeholder='user name'
                                onChange={handleChange} />                                
                                
                            </div>
                            <div className="signUp-form-group">
                            <i className='ion-locked'></i>
                                <input type="password" name='password' placeholder='password'
                                onChange={handlePassowrdChange } />
                                <p className="danger">{formErrors.password}</p>
                                <input type="hidden" name="message" placeholder='' value={act_link}/>
                            </div>
                      
                                <p className="danger-u">{formErrors.user_type}</p>

                                <div className="checkBox">
                                {/* <input type="checkbox" name='checkbox' id="checkbox" /> */}
                                <span> By clicking Sign Up button, you are agreeing with terms and conditions</span>
                            </div>
                            <button className='btn-signup' onClick={handleSubmit}>Login</button>
                            <div className='login-with-google'>

                            <p>or Login with google</p>
                               <GoogleLogin 
                                                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                                                render={renderProps => (
                                                  <div className="signup-icon facebook" onClick={renderProps.onClick}> <i className="fab fa-google"></i></div>
                                                  )}
                                                buttonText='Login with google'
                                                onSuccess={handleOnSuccess}
                                                onFailure={handleOnFailure}
                                                cookiePolicy='single_host_origin'
                                                className="polo-btn google-button">
                               </GoogleLogin>  


                            </div>

                       
                        </div>
                    
                    </div>
                </div>
            }
        </form>
    </React.Fragment>
  )
}

export default SignUp2