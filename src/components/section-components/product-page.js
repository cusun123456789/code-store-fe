import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ProductPage extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return   <section className="all-item-area all-item-area-2 pd-top-100 pd-bottom-100">
				  <div className="container">
				    <div className="header-shadow-inner">
				      <div className="row">
				        <div className="col-lg-9 align-self-center">
				          <div className="isotope-filters item-isotope-btn">
				            <button className="button active ml-0" data-filter="*">All Items</button>
				            <button className="button" data-filter=".cat-1">Site Templates</button>
				            <button className="button" data-filter=".cat-2">UI Templates</button>
				            <button className="button" data-filter=".cat-3">Cms Items</button>
				          </div>
				        </div>
				        <div className="col-lg-3">
				          <form className="single-select-inner float-lg-right">
				            <select>
				              <option>All resources</option>
				              <option value={1}>1 resource</option>
				              <option value={2}>2 resource</option>
				              <option value={3}>3 resource</option>
				            </select>
				          </form>
				        </div>
				      </div>
				    </div>
				    <div className="all-item-section go-top">        
				      <div className="item-isotope row">
				        <div className="item-sizer col-1" />
				        {/* gallery item start here */}
				        <div className="all-isotope-item col-lg-4 col-sm-6 cat-1 cat-3">
				          <div className="thumb">
				            <a className="gallery-fancybox" ><Link to="/product-details">
				              <img src={publicUrl+"assets/img/item/7.png"} alt="image" /></Link>
				            </a>
				            <a className="btn btn-white"><Link to="/product-details">Live Preview</Link></a>
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
				            <a href="#" className="author-details align-item-center">
				              <img src={publicUrl+"assets/img/author/1.png"} alt="img" />
				              <span>Paul E. Hensley</span>
				            </a>
				            <span className="price bg-white float-right">$30.00</span>
				          </div>
				        </div>
				        <div className="all-isotope-item col-lg-4 col-sm-6 cat-1">
				          <div className="thumb">
				            <a className="gallery-fancybox" href="#">
				              <img src={publicUrl+"assets/img/item/8.png"} alt="image" />
				            </a>
				            <a className="btn btn-white"><Link to="/product-details">Live Preview</Link></a>
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
				            <a href="#" className="author-details align-item-center">
				              <img src={publicUrl+"assets/img/author/2.png" }alt="img" />
				              <span>Clay J. Barfield</span>
				            </a>
				            <span className="price bg-white float-right">$30.00</span>
				          </div>
				        </div>
				        <div className="all-isotope-item col-lg-4 col-sm-6 cat-3 cat-2">
				          <div className="thumb">
				            <a className="gallery-fancybox" href="#">
				              <img src={publicUrl+"assets/img/item/9.png"} alt="image" />
				            </a>
				            <a className="btn btn-white"><Link to="/product-details">Live Preview</Link></a>
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
				            <a href="#" className="author-details align-item-center">
				              <img src={publicUrl+"assets/img/author/3.png"} alt="img" />
				              <span>Duane A. Oliva</span>
				            </a>
				            <span className="price bg-white float-right">$30.00</span>
				          </div>
				        </div>
				        <div className="all-isotope-item col-lg-4 col-sm-6 cat-3 cat-1">
				          <div className="thumb">
				            <a className="gallery-fancybox" href="#">
				              <img src={publicUrl+"assets/img/item/10.png"} alt="image" />
				            </a>
				            <a className="btn btn-white"><Link to="/product-details">Live Preview</Link></a>
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
				            <a href="#" className="author-details align-item-center">
				              <img src={publicUrl+"assets/img/author/4.png"} alt="img" />
				              <span>Cynthia V. Sylvia</span>
				            </a>
				            <span className="price bg-white float-right">$30.00</span>
				          </div>
				        </div>
				        <div className="all-isotope-item col-lg-4 col-sm-6 cat-2 cat-1">
				          <div className="thumb">
				            <a className="gallery-fancybox" href="#">
				              <img src={publicUrl+"assets/img/item/11.png"} alt="image" />
				            </a>
				            <a className="btn btn-white"><Link to="/product-details">Live Preview</Link></a>
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
				            <a href="#" className="author-details align-item-center">
				              <img src={publicUrl+"assets/img/author/5.png"} alt="img" />
				              <span>Paul E. Hensley</span>
				            </a>
				            <span className="price bg-white float-right">$30.00</span>
				          </div>
				        </div>
				        <div className="all-isotope-item col-lg-4 col-sm-6 cat-3 cat-2">
				          <div className="thumb">
				            <a className="gallery-fancybox" href="#">
				              <img src={publicUrl+"assets/img/item/12.png"} alt="image" />
				            </a>
				            <a className="btn btn-white"><Link to="/product-details">Live Preview</Link></a>
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
				            <a href="#" className="author-details align-item-center">
				              <img src={publicUrl+"assets/img/author/6.png"} alt="img" />
				              <span>Frances R. Leming</span>
				            </a>
				            <span className="price bg-white float-right">$30.00</span>
				          </div>
				        </div>
				      </div>
				    </div>
				    <div className="row">
				      <div className="col-lg-12 text-center">
				        <ul className="pagination pagination-2">
				          <li className="page-item"><a className="page-link" href="#"><i className="la la-angle-left" /></a></li>
				          <li className="page-item active"><a className="page-link" href="#">01</a></li>
				          <li className="page-item"><a className="page-link" href="#">02</a></li>
				          <li className="page-item"><a className="page-link" href="#">03</a></li>
				          <li className="page-item"><a className="page-link" href="#"><i className="la la-angle-right" /></a></li>
				        </ul>
				      </div>
				    </div>
				  </div>        
				</section>


        }
}

export default ProductPage