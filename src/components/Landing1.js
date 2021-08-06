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
            loggedin
        }
    }
    render() {
        if (!this.state.loggedin) {
            return (<Redirect to=
                '/'/>)
        }
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
                        <li class="list-group-item">07/31/2021</li>
                        <li class="list-group-item">05/05/2021</li>
                        <li class="list-group-item">02/15/2021</li>
                    </ul>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                    <div class="card-header">
                        Type of service
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Dental</li>
                        <li class="list-group-item">Counselling</li>
                        <li class="list-group-item">Dietician</li>
                    </ul>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                    <div class="card-header">
                        Provider Name
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Dr. Mrinal Shah</li>
                        <li class="list-group-item">Dr. Karan Desai</li>
                        <li class="list-group-item">Dr. Ashwini Kumar</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
