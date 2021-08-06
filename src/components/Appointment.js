import React from 'react'
import {Link} from "react-router-dom";

const onclick = () => {
    alert("Succesful")
}



const Appointment = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 shadow mx-auto p-5'>
                    <h1 className='display-6 text-center my-8'>MAKE AN APPOINTMENT</h1>
                    <form>
                        <div className=' form-group p-2'>
                            <h5>Problem</h5>
                            <input type='text' placeholder='Problem' className='form-control'/>
                        </div>
                        <div className=' form-group p-2'>
                            <h5>Service</h5>
                            <input type='text' placeholder='Service' className='form-control'/>
                        </div>                        
                        <div className=' form-group p-2'>
                            <h5>Date</h5>
                            <input type='date' placeholder='Date' className='form-control'/>
                        </div>
                        <div className=' form-group p-2'>
                            <h5>Time</h5>
                            <input type='time' placeholder='Time' className='form-control'/>
                        </div>
                        <div className=' form-group p-2'>
                            <center classname='p-3'>
                                <Link to='/home'><input type='submit' value='Submit' className='btn btn-outline-dark p-2' onClick={onclick}/></Link>
                            </center>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>

    )
}

export default Appointment
