import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Pricing extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return   <section className="pricing-area text-center pd-top-90 pd-bottom-70">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-lg-6">
			        <div className="section-title text-center">
			          <h2>Pricing Plan</h2>
			          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
			        </div>
			      </div>
			    </div>
			    <div className="row justify-content-center">
			      <div className="col-lg-4 col-md-6">
			        <div className="single-price-wrap">
			          <h4 className="pricing-title">Basic</h4>
			          <h2 className="pricing-cost basic"><span>$</span>23.00</h2>
			          <ul className="pricing-list">
			            <li><a href="#">2x option 1</a></li>
			            <li><a href="#">Free option 2</a></li>
			            <li><a href="#">limited option 3</a></li>
			            <li><a href="#">Unlimited option 4</a></li>
			            <li><a href="#">Unlimited option 5</a></li>
			          </ul>
			          <a className="btn btn-border" href="#">Purchase Now</a>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-price-wrap">
			          <h4 className="pricing-title">Standard</h4>
			          <h2 className="pricing-cost standard"><span>$</span>49.00</h2>
			          <ul className="pricing-list">
			            <li><a href="#">2x option 1</a></li>
			            <li><a href="#">Free option 2</a></li>
			            <li><a href="#">limited option 3</a></li>
			            <li><a href="#">Unlimited option 4</a></li>
			            <li><a href="#">Unlimited option 5</a></li>
			          </ul>
			          <a className="btn btn-border" href="#">Purchase Now</a>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-price-wrap">
			          <h4 className="pricing-title">Premium</h4>
			          <h2 className="pricing-cost premium"><span>$</span>99.00</h2>
			          <ul className="pricing-list">
			            <li><a href="#">2x option 1</a></li>
			            <li><a href="#">Free option 2</a></li>
			            <li><a href="#">limited option 3</a></li>
			            <li><a href="#">Unlimited option 4</a></li>
			            <li><a href="#">Unlimited option 5</a></li>
			          </ul>
			          <a className="btn btn-border" href="#">Purchase Now</a>
			        </div>
			      </div>
			    </div>
			  </div>
			</section>


        }
}

export default Pricing