import React, { Component } from 'react'

import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'

export default class Landing1 extends Component {

    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")
        
        let loggedin = true
        if (token === '') {
            loggedin = false
        }

        this.state = {
            problem: localStorage.getItem('problem'),
            service: localStorage.getItem('service'),
            date: localStorage.getItem('date'),
            time: localStorage.getItem('time'),
            loggedin
        }
    }

    render() {
        if (!this.state.loggedin) {
            return (<Redirect to=
                '/'/>)
        }
        else if (this.state.service!=null){
        return (
            <div className='col-md-6 shadow mx-auto p-5'>
            <div class="search-bar">
                <input type="text" placeholder="Search"/>
                <Link to='/provList'><button>SEARCH</button></Link>
            </div>
            <div class="row">
                <div class="col-sm-4">
                    <div class="card">
                    <div class="card-header">
                        Service Date
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">{this.state.date}</li>
                    </ul>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                    <div class="card-header">
                        Type of service
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">{this.state.service}</li>
                    </ul>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                    <div class="card-header">
                        Time 
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">{this.state.time}</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
        )
        }
        else {
            return (
                <div className='col-md-6 shadow mx-auto p-5'>
                    <h3>No services yet</h3>
                </div>
            
            )
        }
    }
}
