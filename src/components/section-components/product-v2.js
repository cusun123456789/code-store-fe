import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ProductV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return   <section className="all-item-area all-item-area-2 pd-top-237 pd-bottom-100">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-4">
			        <div className="section-title">
			          <h2>Featured Items</h2>
			        </div>
			      </div>
			      <div className="col-lg-8">
			        <div className="isotope-filters item-isotope-btn text-lg-right">
			          <button className="button active ml-0" data-filter="*">All Items</button>
			          <button className="button" data-filter=".cat-1">Site Templates</button>
			          <button className="button" data-filter=".cat-2">UI Templates</button>
			          <button className="button" data-filter=".cat-3">All Items</button>
			        </div>
			      </div>
			    </div>
			    <div className="all-item-section go-top">        
			      <div className="item-isotope row">
			        <div className="item-sizer col-1" />
			        {/* gallery item start here */}
			        <div className="all-isotope-item col-lg-4 col-sm-6 cat-1 cat-3">
			          <div className="thumb">
			            <a className="gallery-fancybox" href="#">
			              <img src={publicUrl+"assets/img/item/7.png"} alt="image" />
			            </a>
			            <a className="btn btn-white" href="#">Live Preview</a>
			          </div>
			          <div className="item-details">
			            <h4><Link to="/product-details">Web Platform</Link></h4>
			            <p>Photography Word Press Theme</p>
			            <span className="ratting">
			              <i className="fa fa-star" />
			              <i className="fa fa-star" />
			              <i className="fa fa-star" />
			              <i className="fa fa-star" />
			              <i className="fa fa-star star-o" />
			              <span>(12)</span>
			            </span>
			            <Link to="/product" className="author-details align-item-center">
			              <img src={publicUrl+"assets/img/author/1.png"} alt="img" />
			              <span>Paul E. Hensley</span>
			            </Link>
			            <span className="price bg-white float-right">$30.00</span>
			          </div>
			        </div>
			        <div className="all-isotope-item col-lg-4 col-sm-6 cat-2">
			          <div className="thumb">
			            <a className="gallery-fancybox" href="#">
			              <img src={publicUrl+"assets/img/item/8.png"} alt="image" />
			            </a>
			            <a className="btn btn-white" href="#">Live Preview</a>
			          </div>
			          <div className="item-details">
			            <h4><Link to="/product-details">Case Study</Link></h4>
			            <p>Photography Word Press Theme</p>
			            <span className="ratting">
			              <i className="fa fa-star" />
			              <i className="fa fa-star" />
			              <i className="fa fa-star" />
			              <i className="fa fa-star" />
			              <i className="fa fa-star star-o" />
			              <span>(12)</span>
			            </span>
			            <Link to="/product" className="author-details align-item-center">
			              <img src={publicUrl+"assets/img/author/2.png"} alt="img" />
			              <span>Clay J. Barfield</span>
			            </Link>
			            <span className="price bg-white float-right">$30.00</span>
			          </div>
			        </div>
			        <div className="all-isotope-item col-lg-4 col-sm-6 cat-3 cat-2">
			          <div className="thumb">
			            <a className="gallery-fancybox" href="#">
			              <img src={publicUrl+"assets/img/item/9.png"} alt="image" />
			            </a>
			            <a className="btn btn-white" href="#">Live Preview</a>
			          </div>
			          <div className="item-details">
			            <h4><Link to="/product-details">Project Collaboration</Link></h4>
			            <p>Photography Word Press Theme</p>
			            <span className="ratting">
			              <i className="fa fa-star" />
			              <i className="fa fa-star" />
			              <i className="fa fa-star" />
			              <i className="fa fa-star" />
			              <i className="fa fa-star star-o" />
			              <span>(12)</span>
			            </span>
			            <Link to="/product" className="author-details align-item-center">
			              <img src={publicUrl+"assets/img/author/3.png"} alt="img" />
			              <span>Duane A. Oliva</span>
			            </Link>
			            <span className="price bg-white float-right">$30.00</span>
			          </div>
			        </div>
			        <div className="all-isotope-item col-lg-4 col-sm-6 cat-3 cat-1">
			          <div className="thumb">
			            <a className="gallery-fancybox" href="#">
			              <img src={publicUrl+"assets/img/item/10.png"} alt="image" />
			            </a>
			            <a className="btn btn-white" href="#">Live Preview</a>
			          </div>
			          <div className="item-details">
			            <h4><Link to="/product-details">Voice Landing Page</Link></h4>
			            <p>Photography Word Press Theme</p>
			            <span className="ratting">
			              <i className="fa fa-star" />
			              <i className="fa fa-star" />
			              <i className="fa fa-star" />
			              <i className="fa fa-star" />
			              <i className="fa fa-star star-o" />
			              <span>(12)</span>
			            </span>
			            <Link to="/product" className="author-details align-item-center">
			              <img src={publicUrl+"assets/img/author/4.png"} alt="img" />
			              <span>Cynthia V. Sylvia</span>
			            </Link>
			            <span className="price bg-white float-right">$30.00</span>
			          </div>
			        </div>
			        <div className="all-isotope-item col-lg-4 col-sm-6 cat-2 cat-1">
			          <div className="thumb">
			            <a className="gallery-fancybox" href="#">
			              <img src={publicUrl+"assets/img/item/11.png"} alt="image" />
			            </a>
			            <a className="btn btn-white" href="#">Live Preview</a>
			          </div>
			          <div className="item-details">
			            <h4><Link to="/product-details">Clean Dashboard</Link></h4>
			            <p>Photography Word Press Theme</p>
			            <span className="ratting">
			              <i className="fa fa-star" />
			              <i className="fa fa-star" />
			              <i className="fa fa-star" />
			              <i className="fa fa-star" />
			              <i className="fa fa-star star-o" />
			              <span>(12)</span>
			            </span>
			            <Link to="/product" className="author-details align-item-center">
			              <img src={publicUrl+"assets/img/author/5.png"} alt="img" />
			              <span>Paul E. Hensley</span>
			            </Link>
			            <span className="price bg-white float-right">$30.00</span>
			          </div>
			        </div>
			        <div className="all-isotope-item col-lg-4 col-sm-6 cat-1 cat-2">
			          <div className="thumb">
			            <a className="gallery-fancybox" href="#">
			              <img src={publicUrl+"assets/img/item/12.png"} alt="image" />
			            </a>
			            <a className="btn btn-white" href="#">Live Preview</a>
			          </div>
			          <div className="item-details">
			            <h4><Link to="/product-details">Website Redesign</Link></h4>
			            <p>Photography Word Press Theme</p>
			            <span className="ratting">
			              <i className="fa fa-star" />
			              <i className="fa fa-star" />
			              <i className="fa fa-star" />
			              <i className="fa fa-star" />
			              <i className="fa fa-star star-o" />
			              <span>(12)</span>
			            </span>
			            <Link to="/product" className="author-details align-item-center">
			              <img src={publicUrl+"assets/img/author/6.png"} alt="img" />
			              <span>Frances R. Leming</span>
			            </Link>
			            <span className="price bg-white float-right">$30.00</span>
			          </div>
			        </div>
			      </div>
			    </div>
			    <div className="row">
			      <div className="col-lg-12 text-center go-top">
			        <Link className="btn btn-base" to="/product">More Products</Link>
			      </div>
			    </div>
			  </div>        
			</section>


        }
}

export default ProductV2