import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Faq extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <section className="faq-page-area pd-top-100 pd-bottom-100">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-lg-12">
			        <div className="faq-accordion accordion" id="accordionExample">
			          <div className="card">
			            <div className="card-header">
			              <h2>
			                <button className="btn" type="button" data-toggle="collapse" data-target="#collapseOne">
			                  What Payment Methods Are Accepted?
			                  <span className="collapse-icon" />
			                </button>
			              </h2>
			            </div>
			            <div id="collapseOne" className="collapse show" data-parent="#accordionExample">
			              <div className="card-body">
			                consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
			              </div>
			            </div>
			          </div>                      
			          <div className="card">
			            <div className="card-header">
			              <h2>
			                <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo">
			                  Can I offer my items for free on a promotional basis?
			                  <span className="collapse-icon" />
			                </button>
			              </h2>
			            </div>
			            <div id="collapseTwo" className="collapse" data-parent="#accordionExample">
			              <div className="card-body">
			                consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
			              </div>
			            </div>
			          </div>
			          <div className="card">
			            <div className="card-header">
			              <h2>
			                <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseThree">
			                  How Do I Track My Order?
			                  <span className="collapse-icon" />
			                </button>
			              </h2>
			            </div>
			            <div id="collapseThree" className="collapse" data-parent="#accordionExample">
			              <div className="card-body">
			                consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
			              </div>
			            </div>
			          </div>
			          <div className="card">
			            <div className="card-header">
			              <h2>
			                <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseFour">
			                  How Can | Return a Product?
			                  <span className="collapse-icon" />
			                </button>
			              </h2>
			            </div>
			            <div id="collapseFour" className="collapse" data-parent="#accordionExample">
			              <div className="card-body">
			                consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
			              </div>
			            </div>
			          </div>
			          <div className="card">
			            <div className="card-header">
			              <h2>
			                <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseFive">
			                  What Shipping Methods Are Available?
			                  <span className="collapse-icon" />
			                </button>
			              </h2>
			            </div>
			            <div id="collapseFive" className="collapse" data-parent="#accordionExample">
			              <div className="card-body">
			                consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
			              </div>
			            </div>
			          </div>
			          <div className="card">
			            <div className="card-header">
			              <h2>
			                <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseSix">
			                  What Shipping Methods Are Available?
			                  <span className="collapse-icon" />
			                </button>
			              </h2>
			            </div>
			            <div id="collapseSix" className="collapse" data-parent="#accordionExample">
			              <div className="card-body">
			                consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
			              </div>
			            </div>
			          </div>
			          <div className="card">
			            <div className="card-header">
			              <h2>
			                <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseSeven">
			                  How do I become an author?
			                  <span className="collapse-icon" />
			                </button>
			              </h2>
			            </div>
			            <div id="collapseSeven" className="collapse" data-parent="#accordionExample">
			              <div className="card-body">
			                consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
			              </div>
			            </div>
			          </div>
			          <div className="card">
			            <div className="card-header">
			              <h2>
			                <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseEight">
			                  Tips for Increasing Your Referral Income
			                  <span className="collapse-icon" />
			                </button>
			              </h2>
			            </div>
			            <div id="collapseEight" className="collapse" data-parent="#accordionExample">
			              <div className="card-body">
			                consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>  
			    </div>
			  </div>          
			</section>
        }
}

export default Faq