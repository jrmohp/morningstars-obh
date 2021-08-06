import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class login extends Component {

    constructor(props) {
        super(props)
        let loggedIn = false
        this.state = {
            username : '',
            password : '',
            loggedIn
        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)

        const token = localStorage.getItem("token")

        if (token === null) {
            loggedIn = false
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitForm(e) {
        e.preventDefault()
        const {username, password} = this.state
        if ((username==='testuser' || username ==='testuser1' || username==='morningstar' || username==='morningstars') && password==='Qwerty@123') {
            localStorage.setItem("token", "kasjhbfcaljsdhbvlajdhs")
            this.setState(
                {
                    loggedIn: true
                }
            )
        }
    }

    render() {
        if (this.state.loggedIn){
            return (<Redirect to='/home'/>)
        }
        return (
            <div className='container'>
            <div className='row'>
                <div className='col-md-6 shadow mx-auto p-5'>
                    <h1 className='display-6 text-center my-8'>LOGIN TO YOUR ACCOUNT</h1>
                    <form onSubmit={this.submitForm}>
                        <div className=' form-group p-2'>
                            <h5>USERNAME</h5>
                            <input type='text' placeholder='Username' className='form-control' name='username' value= {this.state.username} onChange={this.onChange}/>
                        </div>
                        <div className=' form-group p-2'>
                            <h5>PASSWORD</h5>
                            <input type='password' placeholder='Password' className='form-control' name='password' value= {this.state.password} onChange={this.onChange}/>
                        </div>                        
                        <div className=' form-group p-2'>
                                <span class="mx-19">Forgot password?</span>
                        </div>
                        <div className=' form-group p-2'>
                            <center className='p-3'>
                                <input type='submit' value='LOGIN' className='btn btn-outline-dark p-2'/>
                                <div className='p-2'> <p className='fs-8'>Do not have an account? <input type='button' className='btn' value= 'Sign Up here'/></p></div>
                            </center>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
        )
    }
}
