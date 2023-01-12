import React from 'react';

function Register_login() {
    return (
        <React.Fragment>
            <div className='Wrapper'>
                <h1>Register</h1>
                <input type="text" placeholder='email'/>
                <input type="text" placeholder='first-name'/>
                <input type="text" placeholder='last-name'/>
                <input type="text" placeholder='password'/>
                
            </div>
        </React.Fragment>
    );
}

export default Register_login;