import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ContactInfo extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <section className="contact-page-area pd-top-100 pd-bottom-70">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-lg-4 col-md-6">
			        <div className="single-contact-wrap text-center">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/icon/map-marker.png"} alt="img" />
			          </div>
			          <h4>Our Address</h4>
			          <p>31 Xô viết Nghệ Tĩnh</p>
			          <p>Đại học Đông Á</p>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-contact-wrap text-center">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/icon/phone-pad.png"} alt="img" />
			          </div>
			          <h4>Our Phone</h4>
			          <p>Office Telephone : 0352323054</p>
			          <p>Mobile : 0352323054</p>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-contact-wrap text-center">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/icon/envelope.png"} alt="img" />
			          </div>
			          <h4>Our Email</h4>
			          <p>Main Email : congquyetgioan@gmail.com</p>
			          <p>Inquiries : congquyet0808@gmail.com</p>
			        </div>
			      </div>   
			    </div>
			  </div>          
			</section>

        }
}

export default ContactInfo