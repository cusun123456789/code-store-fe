import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SignUp extends Component {

    render() {



    return  <section className="pd-top-100 pd-bottom-100 bg-sky-blue">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-xl-7 col-lg-10 text-center">
			        <div className="sign-in-area">
			          <h2>Sign up to your account</h2>
			          <form className="contact-form-wrap">
			            <div className="single-input-wrap input-group">
			              <label htmlFor="inp-0">User Name</label>
			              <input id="inp-0" type="text" className="form-control" placeholder="Enter your Name" />
			            </div>
			            <div className="single-input-wrap input-group">
			              <label htmlFor="inp-1">Email address</label>
			              <input id="inp-1" type="text" className="form-control" placeholder="Enter your email address" />
			            </div>
			            <div className="single-input-wrap input-group">
			              <label htmlFor="inp-2">Password</label>
			              <input id="inp-2" type="text" className="form-control" placeholder="Enter your email password" />
			            </div>
			            <div className="row">
			              <div className="col-lg-6 col-sm-6 col-12">
			                <div className="single-category text-left">
			                  <label><input type="checkbox" aria-label="Checkbox for following text input" />
			                    <span className="checkmark" />
			                    Remember me</label>
			                </div>
			              </div>
			              <div className="col-lg-6 col-sm-6 col-12 text-sm-right text-left">
			                <a className="forget-pass" href="#">Forgot your password?</a>
			              </div>
			            </div>
			            <button className="btn btn-base w-100">Sign Up</button>
			            <p>Or continue with</p>
			            <button className="btn btn-g w-100"><i className="fab fa-google" />Continue with Google</button>
			            <button className="btn btn-f w-100"><i className="fab fa-facebook-f" />Continue with Facebook</button>
			            <p>Already Have account? <Link to="/sign-in">Sign In</Link></p>
			          </form>
			        </div>
			      </div>  
			    </div>
			  </div>          
			</section>


        }
}

export default SignUp