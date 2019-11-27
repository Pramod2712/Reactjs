import React, { Component } from "react";
import service from './service';


export default class Login extends Component {
 
constructor(props){
    super(props);
    this.state = {
      email:'',
      password:''
    }
}

submit = (e)=>{
    e.preventDefault()
    service('login',this.state).then(res=>{
        console.log(res)
    })
}

inputHandler = (e) =>{
    this.setState({[e.target.name]:e.target.value})
}

  render() {
    return (
      <div className="wrap-login100 p-l-50 p-r-50 p-t-70 p-b-50">
        <form className="login100-form validate-form">
          <div className="text-center w-full">
            <span className="txt1">
              NEW TO ZULO?{" "}
              <a className="txt1 bo1 hov1" href="./signup.html">
                SIGN UP
              </a>
            </span>
          </div>
          <div className="text-center w-full">
            <span className="txt2">
              <i className="material-icons" style={{ fontSize: "11px" }}>
                arrow_back
              </i>
              Back
            </span>
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="username,email or mobile"
              value={this.state.email}
              onChange={this.inputHandler}
            />
          </div>
          <div className="form-group">
            <input
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={this.state.password}
              onChange={this.inputHandler}
            />
          </div>
          <div className="container-login100-form-btn p-t-25 p-l-50 p-b-15">
            <button className="login100-form-btn" onClick={this.submit}>
             Login
            </button>
            <div className="social-login">
              <img src="./images/svg/Mask Group 612.svg" alt="" />
              <img src="./images/svg/Mask Group 613.svg" alt="" />
              <i className="fa fa-facebook circle"></i>
              <i className="fa fa-google circle"></i>
            </div>
          </div>
          <div className="forget">
            <a href="#">Forget Password?</a>
          </div>
        </form>
      </div>
    );
  }
}
