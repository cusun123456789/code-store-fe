import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Error extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <section className="error-page-area pd-top-100 pd-bottom-100">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-lg-8 col-md-10">
			        <div className="error-inner text-center">
			          <img src={publicUrl+"assets/img/404.png"} alt="img" />
			          <h2>Oops!</h2>
			          <p>There’s nothing here, but if you feel this is an error please let us know <br /> <span>let us know </span></p>
			          <Link className="btn btn-base" to="/">Go Home</Link>
			        </div>
			      </div>
			    </div>
			  </div>
			</section>

        }
}

export default Error