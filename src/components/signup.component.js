import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <div>
                <h3>Create Account</h3>
                
                <div className="form-group">
                    <label>First Name</label>
                    <input type="firstName" className="form-control" placeholder="Enter first name" />
                </div>

                <div className="form-group">
                    <label>Last Name</label>
                    <input type="lastName" className="form-control" placeholder="Enter last name" />
                </div>
                
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
            </div>
        );
    }
}