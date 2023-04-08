import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class NewProduct extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <section className="featured-area pd-top-90 pd-bottom-100">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-lg-5">
			        <div className="section-title text-center">
			          <h2>New Products</h2>
			          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
			        </div>
			      </div>
			    </div>
			    <div className="row">
			      <div className="col-lg-12">
			        <ul className="featured-product">
			          <li className="thumb">
			            <Link to="/product-details">
			              <img src={publicUrl+"assets/img/featured/1.png" }alt="img" />
			            </Link>                            
			          </li>
			          <li className="thumb">
			            <Link to="/product-details">
			              <img src={publicUrl+"assets/img/featured/2.png"} alt="img" />
			            </Link>                            
			          </li>
			          <li className="thumb">
			            <Link to="/product-details">
			              <img src={publicUrl+"assets/img/featured/3.png"} alt="img" />
			            </Link>                            
			          </li>
			          <li className="thumb">
			            <Link to="/product-details">
			              <img src={publicUrl+"assets/img/featured/4.png"} alt="img" />
			            </Link>                            
			          </li>
			          <li className="thumb">
			            <Link to="/product-details">
			              <img src={publicUrl+"assets/img/featured/5.png"} alt="img" />
			            </Link>                            
			          </li>
			          <li className="thumb">
			            <Link to="/product-details">
			              <img src={publicUrl+"assets/img/featured/6.png"} alt="img" />
			            </Link>                            
			          </li>
			          <li className="thumb">
			            <Link to="/product-details">
			              <img src={publicUrl+"assets/img/featured/7.png"} alt="img" />
			            </Link>                            
			          </li>
			          <li className="thumb">
			            <Link to="/product-details">
			              <img src={publicUrl+"assets/img/featured/8.png"} alt="img" />
			            </Link>                            
			          </li>
			          <li className="thumb">
			            <Link to="/product-details">
			              <img src={publicUrl+"assets/img/featured/9.png"} alt="img" />
			            </Link>                            
			          </li>
			          <li className="thumb">
			            <Link to="/product-details">
			              <img src={publicUrl+"assets/img/featured/10.png"} alt="img" />
			            </Link>                            
			          </li>
			        </ul>
			      </div>
			      <div className="col-lg-12 text-center go-top">
			        <Link className="btn btn-base" to="/product">Top New Files</Link>
			        <Link className="btn btn-white" to="/product">All Items</Link>
			      </div>
			    </div>
			  </div>
			</section>



        }
}

export default NewProduct