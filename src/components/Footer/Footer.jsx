import React, { Fragment } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './Footer.css';
import logo from '../../../src/assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faTwitterSquare, faFacebookF, faSkype, faInstagram } from "@fortawesome/free-brands-svg-icons";






const Footer = () => {
	return (

		<Fragment >
			<footer className="footers bg-light pt-5 pb-3">
				<div className="container ">
					<div className="row">
						<div className="col-xs-12 col-sm-6 col-md-4 footers-one">
							<div className="footers-logo">
								<img src={logo} title="logo" /> <span className="MiniLop" >MiniLop</span>

							</div>
							<div className="footers-info mt-3">
								<p>Lorem ipsum dolor sit amet, consetetur sadipscing .</p>
							</div>
							<div className="social-icons">

								<a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitterSquare} /></a>
								<a href="https://plus.google.com/"><FontAwesomeIcon icon={faSkype} /></a>
								<a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebookF} /></a>
								<a href="https://www.Instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
							</div>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-2 footers-two ">
							<h5>Essentials </h5>
							<ul className="list-unstyled">
								<li><a href="maintenance.html">About</a></li>
								<li><a href="contact.html">Terms of use</a></li>

							</ul>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-2 footers-three">
							<h5>Get Help </h5>
							<ul className="list-unstyled">
								<li><a href="maintenance.html">Support Carrer</a></li>
								<li><a href="contact.html">24h Service</a></li>

							</ul>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-2 footers-four">
							<h5>Support </h5>
							<ul className="list-unstyled">
								<li><a href="maintenance.html">FAQ</a></li>
								<li><a href="contact.html">Policy</a></li>

							</ul>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-2 footers-five">
							<h5>Contact </h5>
							<ul className="list-unstyled">
								<li><a href="maintenance.html">WhatsApp</a></li>
								<li><a href="about.html">Support 24</a></li>

							</ul>
						</div>

					</div>
				</div>



				<section className="copyright border">
					<div className="container">
						<div className="row">
							<div className="col-md-6 pt-3 box-left">
								<p className="text-muted">Copyright  © 2022 minilop</p>
							</div>
							<div className="col-md-6 pt-3 box-right">
								<p className="text-muted">Created with ❤️️ by Smart Angle</p>
							</div>

						</div>
					</div>
				</section>

			</footer >

		</Fragment >











	);
}

export default Footer;