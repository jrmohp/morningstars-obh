import React from 'react'

import {Link} from "react-router-dom";

function ProviderList() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 shadow mx-auto p-5'>
                    <h1 className='display-6 text-center my-8'>LIST OF AVAILABLE PROVIDERS</h1>
                    <div class="card" >
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><Link to ='/appointment'><input type='button' value='Doctor 2' className='btn btn-outline-dark p-2'/></Link><span></span><p className='text-end'>0.2km</p></li>
                            <li class="list-group-item"><Link to ='/appointment'><input type='button' value='Doctor 3' className='btn btn-outline-dark p-2'/></Link><span></span><p className='text-end'>0.3km</p></li>
                            <li class="list-group-item"><Link to ='/appointment'><input type='button' value='Doctor 1' className='btn btn-outline-dark p-2'/></Link><span></span><p className='text-end'>0.1km</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ProviderList
