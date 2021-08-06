import React, { Component } from 'react'

import { Link } from "react-router-dom";

export default class Appointment1 extends Component {

    constructor(props) {
        super(props);

        this.onchangeProblem = this.onchangeProblem.bind(this);
        this.onchangeService = this.onchangeService.bind(this);
        this.onchangeDate = this.onchangeDate.bind(this);
        this.onchangeTime = this.onchangeTime.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            problem : '',
            service : '',
            date: '',
            time : ''
        }
    }

    onchangeProblem(e){
        this.setState({problem : e.target.value})
    }

    onchangeService(e){
        this.setState({service : e.target.value})
    }

    onchangeDate(e){
        this.setState({date : e.target.value})
    }

    onchangeTime(e){
        this.setState({time : e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        this.setState({
            problem : '',
            service : '',
            date: '',
            time : ''
        })
    }

    componentWillUpdate () {
        localStorage.setItem('problem', this.state.problem)
        localStorage.setItem('service', this.state.service)
        localStorage.setItem('date', this.state.date)
        localStorage.setItem('time', this.state.time)
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 shadow mx-auto p-5'>
                        <h1 className='display-6 text-center my-8'>MAKE AN APPOINTMENT</h1>
                        <form onSubmit={this.onSubmit}>
                            <div className=' form-group p-2'>
                                <h5>Problem</h5>
                                <input type='text' placeholder='Problem' className='form-control' value = {this.state.problem} onChange = {this.onchangeProblem} />
                            </div>
                            <div className=' form-group p-2'>
                                <h5>Service</h5>
                                <input type='text' placeholder='Service' className='form-control' value = {this.state.service} onChange = {this.onchangeService}/>
                            </div>                        
                            <div className=' form-group p-2'>
                                <h5>Date</h5>
                                <input type='date' placeholder='Date' className='form-control' value = {this.state.date} onChange = {this.onchangeDate}/>
                            </div>
                            <div className=' form-group p-2'>
                                <h5>Time</h5>
                                <input type='time' placeholder='Time' className='form-control' value = {this.state.time} onChange =  {this.onchangeTime}/>
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
}
