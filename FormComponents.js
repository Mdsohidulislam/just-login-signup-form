import React from 'react';
import './Form.css'
import TextField from '@material-ui/core/TextField';
import fb from '../../images/Icon/fb.png'; 
import google from '../../images/Icon/google.png'

const FormComponents = () => {
    return (
        <div className="col-10 col-md-4 mx-auto my-3 shadow-lg p-3">
            <div className="log-create-area border p-1">
            <form className='p-2 br-2'> <span className='form_title'>Create an account</span>
            <TextField name='first_ame' className='w-100' label='First Name'></TextField><br/>
            <TextField name='last_name' className='w-100' type='text' label='Last Name'></TextField><br/>
            <TextField name='email' className='w-100' type='email' label='Email'></TextField><br/>
            <TextField name='password' className='w-100' type='password' label='Password'></TextField><br/>
            <TextField name='confirm_password' className='w-100' type='password' label='Confirm password'></TextField><br/>
            </form>
            <div className="submit">
                <input className='submit_button my-auto' type="submit" value="Create an account"/>
                <p className='p-2'>Already have an account ?   <a href='#'>Login</a></p>
            </div>
            </div>
            <div className="or-area">
                <div className='or_div'></div>
                <div className='or'>Or</div>
            </div>   
            <div className="fb-google-area">
                <p><img src={fb} alt=""/> Continue with Facebook</p>
                <p><img src={google} alt=""/> Continue with Google</p>
            </div>         
        </div>
    );
};

export default FormComponents;