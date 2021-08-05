import React from 'react'

import { Link } from "react-router-dom";

function SignUp() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 shadow mx-auto p-5'>
                    <h1 className='display-6 text-center my-8'>SIGN UP</h1>
                    <form>
                        <div className=' form-group p-2'>
                            <h5>FULL NAME</h5>
                            <input type='text' placeholder='Full Name' className='form-control'/>
                        </div>
                        <div className=' form-group p-2'>
                            <h5>CONTACT NO.</h5>
                            <input type='text' placeholder='Contact number' className='form-control'/>
                        </div>
                        <div className=' form-group p-2'>
                            <h5>EMAIL</h5>
                            <input type='email' placeholder='Email' className='form-control'/>
                        </div>
                        <div className=' form-group p-2'>
                            <h5>CREATE PASSWORD</h5>
                            <input type='password' placeholder='Create Password' className='form-control'/>
                        </div>
                        <div className=' form-group p-2'>
                            <h5>CONFIRM PASSWORD</h5>
                            <input type='password' placeholder='Confirm Password' className='form-control'/>
                        </div>
                        <div className=' form-group p-2'>
                            <center classname='p-3'>
                                <input type='submit' value='SIGN UP' className='btn btn-outline-dark p-2'/>
                                <div className='p-2'> <p className='fs-8'>Already have an account?<Link to='/'><input type='button' className='btn' value= 'Log in here'/></Link></p></div>
                            </center>
                        </div>
                    </form>
                </div>
            </div>            
        </div>
    )
}

export default SignUp
