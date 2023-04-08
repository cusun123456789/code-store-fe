import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Policy extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <section className="policy-page-area pd-top-100 pd-bottom-100">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-lg-8">
			        <p>Since we are offering non-tangible irrevocable, digital goods we issue refunds case by case basis only. Refund has to be processed within 15 days of purchase order. Our sales and support will try to solve your issues and if you are not satisfied then we will refund issue.</p>
			        <p>We make our plugins, extensions, and themes with extreme care and launch them only after thorough-repeated testing, so we strongly believe that our products will work without any issue. If you find any issue, we are available to help you solve the issue resulting from any number of reasons.</p>
			        <p>In the case the plugin(s) or theme(s) you purchased didn’t work properly as advertised and we couldn’t resolve the issue, we, ThemePlace, will offer a full refund within 15 days of the purchase. However, since the plugins and themes are digitally delivered and are non-tangible goods, we can offer refund full or partial only if the item(s) you purchased is broken, not working properly, or truly missing features as advertised on the sales page of the item(s) you purchased.</p>
			        <p>Issues caused by third-party plugins, themes, or other software will not provide grounds for a refund.</p>
			        <p>Refunds will be offered at our sole discretion.If the refund is for plugin or theme renewal and you are within first 30 days of the renewal, then please get in touch with our support team and our support team will issue the refund.</p>
			        <h4>Conditions for a refund for new purchase (not renewal)</h4>
			        <p>You must meet ALL of the following conditions:</p>
			        <ul>
			          <li>You are within the first 15 days of the purchase of the item.</li>
			          <li>Your issue(s) comes from not being able to install the plugin or theme properly or get the plugin or theme to perform its basic functions.</li>
			          <li>You have attempted to resolve your issue(s) with our support team.</li>
			          <li>No refunds will be granted after the first 15 days of the original purchase whatsoever.</li>
			          <li>Issues caused by third-party plugins, themes or other software will not provide grounds for a refund.</li>
			          <li>Issues related to Demo Import will not provide grounds for a refund because Demo Import depends on the hosting service.</li>
			        </ul>
			        <p>If you are using a shared hosting plan, then there is a high chance that demo import might not work on your server because your server might have some limitation. For the demo import to work properly, the PHP configuration on your server should be:</p>
			        <ul>
			          <li>max_execution_time 360</li>
			          <li>memory_limit 256M</li>
			          <li>post_max_size 32M</li>
			          <li>upload_max_filesize 32M</li>
			        </ul>
			        <p>Note that there is a difference between a broken item and simply receiving an error message or having trouble configuring the product to your desired result.</p>
			        <p>Before you request a refund from ThemePlace, you must do the following:</p>
			        <ul>
			          <li>Read the extensive documentation related to the item you purchased.</li>
			          <li>Confirm that your server meets the specifications laid out requirements for the product and WordPress in general [https://wordpress.org/about/requirements/].</li>
			          <li>Open a new support ticket with our support team if you are facing issue even after going through the above two points.</li>
			        </ul>
			        <p>If you’re not sure whether a product is right for you, please contact us with your questions before making a purchase. We will be happy to assist you.</p>
			        <p className="m-0">Due to the nature of digital goods, we recognize that this policy can be abused, and reserve the right to refuse refunds if we determine the refund policy is being taken advantage of.</p>
			      </div>  
			    </div>
			  </div>          
			</section>
        }
}

export default Policy