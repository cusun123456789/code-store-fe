import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';

const ProductV1 = () => {
	//
	const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

function DisplayLocations() {
	const { loading, error, data } = useQuery(GET_LOCATIONS);

  const publicUrl = ''
	return(

	
		 <section className="all-item-area pd-top-90 pd-bottom-100">
				  <div className="container">
					<div className="row">
					  <div className="col-lg-4">
						<div className="section-title">
						  <h2>All Items</h2>
						</div>
					  </div>
					  <div className="col-lg-8 mt-2">
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
						{
							data.locations.map(({ id, price}) => (
								<div className="all-isotope-item col-lg-4 col-sm-6 cat-1 cat-3">
						  <div className="thumb">
							<a className="gallery-fancybox" href="#">
							  <img src={publicUrl+"assets/img/item/1.png"} alt="image" />
							</a>
							<a className="btn btn-white" href="#">Live Preview</a>
						  </div>
						  <div className="item-details">
							<span className="price">{price}</span>
							<span className="ratting float-right">
							  <i className="fa fa-star" />
							  <i className="fa fa-star" />
							  <i className="fa fa-star" />
							  <i className="fa fa-star" />
							  <i className="fa fa-star star-o" />
							  <span>(12)</span>
							</span>
							<h4><Link to="/product-details">Kiamu</Link></h4>
							<p>Photography Word Press Theme</p>
						  </div>
						</div>
							  ))
						}
						{/* <div className="all-isotope-item col-lg-4 col-sm-6 cat-1 cat-3">
						  <div className="thumb">
							<a className="gallery-fancybox" href="#">
							  <img src={publicUrl+"assets/img/item/1.png"} alt="image" />
							</a>
							<a className="btn btn-white" href="#">Live Preview</a>
						  </div>
						  <div className="item-details">
							<span className="price">$30.00</span>
							<span className="ratting float-right">
							  <i className="fa fa-star" />
							  <i className="fa fa-star" />
							  <i className="fa fa-star" />
							  <i className="fa fa-star" />
							  <i className="fa fa-star star-o" />
							  <span>(12)</span>
							</span>
							<h4><Link to="/product-details">Kiamu</Link></h4>
							<p>Photography Word Press Theme</p>
						  </div>
						</div> */}
						<div className="all-isotope-item col-lg-4 col-sm-6 cat-1 cat-3">
						  <div className="thumb">
							<a className="gallery-fancybox" href="#">
							  <img src={publicUrl+"assets/img/item/1.png"} alt="image" />
							</a>
							<a className="btn btn-white" href="#">Live Preview</a>
						  </div>
						  <div className="item-details">
							<span className="price">$30.00</span>
							<span className="ratting float-right">
							  <i className="fa fa-star" />
							  <i className="fa fa-star" />
							  <i className="fa fa-star" />
							  <i className="fa fa-star" />
							  <i className="fa fa-star star-o" />
							  <span>(12)</span>
							</span>
							<h4><Link to="/product-details">Kiamu</Link></h4>
							<p>Photography Word Press Theme</p>
						  </div>
						</div>
						<div className="all-isotope-item col-lg-4 col-sm-6 cat-2">
						  <div className="thumb">
							<a className="gallery-fancybox" href="#">
							  <img src={publicUrl+"assets/img/item/2.png"} alt="image" />
							</a>
							<a className="btn btn-white" href="#">Live Preview</a>
						  </div>
						  <div className="item-details">
							<span className="price">$30.00</span>
							<span className="ratting float-right">
							  <i className="fa fa-star" />
							  <i className="fa fa-star" />
							  <i className="fa fa-star" />
							  <i className="fa fa-star" />
							  <i className="fa fa-star star-o" />
							  <span>(12)</span>
							</span>
							<h4><Link to="/product-details">Russell brown</Link></h4>
							<p>Photography Word Press Theme</p>
						  </div>
						</div>
						<div className="all-isotope-item col-lg-4 col-sm-6 cat-3 cat-2">
						  <div className="thumb">
							<a className="gallery-fancybox" href="#">
							  <img src={publicUrl+"assets/img/item/3.png"} alt="image" />
							</a>
							<a className="btn btn-white" href="#">Live Preview</a>
						  </div>
						  <div className="item-details">
							<span className="price">$30.00</span>
							<span className="ratting float-right">
							  <i className="fa fa-star" />
							  <i className="fa fa-star" />
							  <i className="fa fa-star" />
							  <i className="fa fa-star" />
							  <i className="fa fa-star star-o" />
							  <span>(12)</span>
							</span>
							<h4><Link to="/product-details">Mobile application - LonKat</Link></h4>
							<p>Photography Word Press Theme</p>
						  </div>
						</div>
						<div className="all-isotope-item col-lg-4 col-sm-6 cat-3 cat-1">
						  <div className="thumb">
							<a className="gallery-fancybox" href="#">
							  <img src={publicUrl+"assets/img/item/4.png"} alt="image" />
							</a>
							<a className="btn btn-white" href="#">Live Preview</a>
						  </div>
						  <div className="item-details">
							<span className="price">$30.00</span>
							<span className="ratting float-right">
							  <i className="fa fa-star" />
							  <i className="fa fa-star" />
							  <i className="fa fa-star" />
							  <i className="fa fa-star" />
							  <i className="fa fa-star star-o" />
							  <span>(12)</span>
							</span>
							<h4><Link to="/product-details">Landing page - Kitchen</Link></h4>
							<p>Photography Word Press Theme</p>
						  </div>
						</div>
						<div className="all-isotope-item col-lg-4 col-sm-6 cat-2 cat-1">
						  <div className="thumb">
							<a className="gallery-fancybox" href="#">
							  <img src={publicUrl+"assets/img/item/5.png"} alt="image" />
							</a>
							<a className="btn btn-white" href="#">Live Preview</a>
						  </div>
						  <div className="item-details">
							<span className="price">$30.00</span>
							<span className="ratting float-right">
							  <i className="fa fa-star" />
							  <i className="fa fa-star" />
							  <i className="fa fa-star" />
							  <i className="fa fa-star" />
							  <i className="fa fa-star star-o" />
							  <span>(12)</span>
							</span>
							<h4><Link to="/product-details">UI Templates</Link></h4>
							<p>Photography Word Press Theme</p>
						  </div>
						</div>
						<div className="all-isotope-item col-lg-4 col-sm-6 cat-1 cat-2">
						  <div className="thumb">
							<a className="gallery-fancybox" href="#">
							  <img src={publicUrl+"assets/img/item/6.png"} alt="image" />
							</a>
							<a className="btn btn-white" href="#">Live Preview</a>
						  </div>
						  <div className="item-details">
							<span className="price">$30.00</span>
							<span className="ratting float-right">
							  <i className="fa fa-star" />
							  <i className="fa fa-star" />
							  <i className="fa fa-star" />
							  <i className="fa fa-star" />
							  <i className="fa fa-star star-o" />
							  <span>(12)</span>
							</span>
							<h4><Link to="/product-details">Kiamu</Link></h4>
							<p>Photography Word Press Theme</p>
						  </div>
						</div>
					  </div>
					</div>
					<div className="row">
					  <div className="col-lg-12 text-center">
						<Link className="btn btn-base" to="/product">More Products</Link>
					  </div>
					</div>
				  </div>        
				</section>
			)
	
}
}
    


export default ProductV1	