import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'


import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

export default class logout extends Component {

    constructor(props) {
        super(props)
        let loggedin = true
        const token = localStorage.getItem('token')
        if (token!= null){
            loggedin = false
        }
        this.state = {
            loggedin
        }
        localStorage.setItem('token', '')

    }



    render() {
        if (!this.state.loggedin) {
            return (<Redirect to=
                '/'/>)
        }
        return (
            <div>
                <nav className='navbar navbar-expand-lg navbar-dark py-2 justify-content-center' activeKey="/">
                <Nav.Item className='p-3'>
                    <Link to='/'><input type='button' value='Signout' className='btn btn-outline-dark p-2'><i className="icon-signout"></i></input></Link>
                </Nav.Item>
                </nav>
                
            </div>
        )
    }
}
