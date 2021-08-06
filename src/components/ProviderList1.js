import React, { Component } from 'react'
import { Redirect , Link} from 'react-router-dom'
//import axios from 'axios'

export default class ProviderList1 extends Component {


    constructor(props) {
        let loggedin = true
        super(props)
        this.state = {
            ProviderList : [],
            loggedin
        }

        
        const token = localStorage.getItem("token")
        
        if (token === '') {
            loggedin = false
        }
        console.log(token)
        this.state = {
            loggedin
        }
    }


    componentDidMount() {
        this.getLists();
    }
    
    getLists() {
        fetch('http://34.66.243.116/providers/')
        .then(result => result.json())
        .then(result => this.setState({ProviderList: result}))
        console.log("Hey there")
        console.log(typeof this.state.ProviderList)
}
/*
    getLists() {
        fetch('http://34.66.243.116/providers/')
        .then(response => response.json())
        .then(data => console.log(data));
    }
*/
    render() {
        if (!this.state.loggedin){
            return (<Redirect to='/'/>)
        }
        return (
            <div className='container'>
            <div className='row'>
                <div className='col-md-6 shadow mx-auto p-5'>
                    <h1 className='display-6 text-center my-8'>LIST OF AVAILABLE PROVIDERS</h1>
                    <div class="card" >
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item"><Link to ='/appointment'><input type='button' value='Hayden835 Mante251' className='btn btn-outline-dark p-2'/></Link><span></span><p className='text-end'>0.2km</p></li>
                            <li class="list-group-item"><Link to ='/appointment'><input type='button' value='Allen322 Price929' className='btn btn-outline-dark p-2'/></Link><span></span><p className='text-end'>0.3km</p></li>
                            <li class="list-group-item"><Link to ='/appointment'><input type='button' value='Deidra675 Borer986' className='btn btn-outline-dark p-2'/></Link><span></span><p className='text-end'>0.1km</p></li>
                        
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
