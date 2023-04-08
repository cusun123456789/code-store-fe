import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class BannerV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <div className="banner-area banner-area-2">
			  <div className="container">
			    <div className="banner-area-inner">
			      <div className="row justify-content-center">
			        <div className="col-lg-8 align-self-center">
			          <div className="banner-inner">
			            <h2>The Biggest Marketplace for <span>Digital Product</span></h2>
			            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse</p>
			            <div className="btn-wrap">
			              <Link className="btn btn-base" to="/product">All Items</Link>
			            </div>                            
			          </div>
			        </div>
			        <div className="col-lg-4 align-self-center">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/banner/3.png"} alt="img" />
			          </div>
			        </div>
			        <div className="col-md-12">
			          <div className="form-area text-center">
			            <h3>Find Your Templates</h3>
			            <form>
			              <select>
			                <option>All resources</option>
			                <option value={1}>1 resource</option>
			                <option value={2}>2 resource</option>
			                <option value={3}>3 resource</option>
			              </select>
			              <input type="text" className="form-control" />
			              <button type="submit" className="btn"><img src={publicUrl+"assets/img/icon/1.png"} alt="img" /></button>
			            </form>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>



        }
}

export default BannerV2