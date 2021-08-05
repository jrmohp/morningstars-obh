import React from 'react'

import { Link } from "react-router-dom";

const login = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 shadow mx-auto p-5'>
                    <h1 className='display-6 text-center my-8'>LOGIN TO YOUR ACCOUNT</h1>
                    <form>
                        <div className=' form-group p-2'>
                            <h5>USERNAME</h5>
                            <input type='text' placeholder='Username' className='form-control'/>
                        </div>
                        <div className=' form-group p-2'>
                            <h5>PASSWORD</h5>
                            <input type='password' placeholder='Password' className='form-control'/>
                        </div>                        
                        <div className=' form-group p-2'>
                                <span class="mx-19">Forgot password?</span>
                        </div>
                        <div className=' form-group p-2'>
                            <center classname='p-3'>
                                <input type='submit' value='LOGIN' className='btn btn-outline-dark p-2'/>
                                <div className='p-2'> <p className='fs-8'>Do not have an account? <Link to='/signUp'><input type='button' className='btn' value= 'Sign Up here'/></Link></p></div>
                            </center>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default login
