import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'logo'
        let anchor = '#'
        return (
        	<div>
        		<div className="dkt-sitebar-menu">
				  <div className="dkt-sitebar-menu">
				    <span className="dkt-sitebar-close"><i className="fa fa-times" /></span>
				    <div className="dkt-details-inner">
				      <div className="logo go-top">
				        <Link to="/"><img src={publicUrl+"assets/img/logo-3.png"} alt="img" /></Link>
				      </div>
				      <p className="details">Donsectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. </p>
				      <div className="address-inner">
				        <h5>Address</h5>
				        <p>3538 Cambridge Place Laurel, MD 20707</p>
				      </div>
				      <div className="address-inner">
				        <h5>Phone</h5>
				        <p>410-565-2575</p>
				      </div>
				      <div className="address-inner mb-0">
				        <h5>Email</h5>
				        <p>JohnPMills@dmarket.com</p>
				      </div>
				    </div>
				    <div className="dkt-market-earn">
				      <div className="address-inner">
				        <h5>Market Earning</h5>
				        <p>online store with lots of digital product and exclusive Item</p>
				      </div>
				      <div className="row">
				        <div className="col-lg-6">
				          <div className="earn-inner">
				            <p>Item Sold</p>
				            <h5>12501</h5>
				          </div>
				        </div>
				        <div className="col-lg-6">
				          <div className="earn-inner">
				            <p>Total Earning</p>
				            <h5>25804</h5>
				          </div>
				        </div>
				      </div>
				    </div>
				  </div>
				</div>
	            <div className="navbar-area go-top">
				  <nav className="navbar navbar-expand-lg">
				    <div className="container nav-container">
				      <div className="responsive-mobile-menu">
				        <button className="menu toggle-btn d-block d-lg-none" data-target="#dkt_main_menu" aria-expanded="false" aria-label="Toggle navigation">
				          <span className="icon-left" />
				          <span className="icon-right" />
				        </button>
				      </div>
				      <div className="logo">
				        <Link className="main-logo-h1" to="/"><img src={publicUrl+"assets/img/logo.png" }alt="img" /></Link>
				      </div>
				      <div className="nav-right-part nav-right-part-mobile">
				        <a className="btn btn-base" href="#">Sign Up</a>
				      </div>
				      <div className="collapse navbar-collapse" id="dkt_main_menu">
				        <ul className="navbar-nav menu-open">
				          <li className=" current-menu-item">
				            <a href="#">Home</a>
				            
				          </li>
				          <li><Link to="/product">Product</Link></li>
				          <li className="menu-item-has-children ">
				            <a href="#">Pages</a>
				            <ul className="sub-menu">
				              <li><Link to="/product">Product</Link></li>
				              <li><Link to="/product-details">Product Details</Link></li>
				              <li><Link to="/vendor">Vendor</Link></li>
				              <li><Link to="/category">Category</Link></li>
				              <li><Link to="/faq">Faq</Link></li>
				              <li><Link to="/policy">Refund Policy</Link></li>
				              <li><Link to="/error">404</Link></li>
				              <li><Link to="/sign-in">Sign In</Link></li>
				              <li><Link to="/sign-up">Sign Up</Link></li>
				            </ul>
				          </li>
				          <li className="menu-item-has-children current-menu-item">
				            <Link to="/blog">Blog</Link>
				            <ul className="sub-menu">
				              <li><Link to="/blog">Blog Standard</Link></li>
				              <li><Link to="/blog-details">Blog Details</Link></li>
				            </ul>
				          </li>
				          <li><Link to="/contact">Contact</Link></li>
				        </ul>
				      </div>
				      <div className="nav-right-part nav-right-part-desktop">
				        <ul>
				          <li><a href="#"><img src={publicUrl+"assets/img/icon/2.png"} alt="icon" />0 Items</a></li>
				          <li><a className="search" href="#"><img src={publicUrl+"assets/img/icon/1.png" }alt="icon" /></a></li>
				          <li className="menu-bar dropdown-menu-btn"><a href="#"><i className="fa fa-bars"></i></a></li>
				        </ul>
				      </div>
				    </div>
				  </nav>
				</div>
			</div>


        )
    }
}


export default Navbar