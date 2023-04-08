import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class FeaturedV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <section className="dmarket-area bg-sky-blue pd-top-90 pd-bottom-70">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-lg-5">
			        <div className="section-title text-center">
			          <h2>Dmarket Features</h2>
			          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
			        </div>
			      </div>
			    </div>
			    <div className="row justify-content-center">
			      <div className="col-lg-4 col-md-6">
			        <div className="single-dmarket-wrap">
			          <div className="media">
			            <div className="thumb">
			              <img src={publicUrl+"assets/img/icon/dmarket-1.png"} alt="img" />
			            </div>
			            <div className="wrap-details media-body">
			              <h5><a href="#">Quality Platform</a></h5>
			              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore </p>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-dmarket-wrap">
			          <div className="media">
			            <div className="thumb bg-2">
			              <img src={publicUrl+"assets/img/icon/dmarket-2.png"} alt="img" />
			            </div>
			            <div className="wrap-details media-body">
			              <h5><a href="#">Premium User</a></h5>
			              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore </p>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-dmarket-wrap">
			          <div className="media">
			            <div className="thumb bg-3">
			              <img src={publicUrl+"assets/img/icon/dmarket-3.png"} alt="img" />
			            </div>
			            <div className="wrap-details media-body go-top">
			              <h5><a href="#">Cloud Upload</a></h5>
			              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore </p>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</section>


        }
}

export default FeaturedV2