import React, { Fragment ,useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Header.css';
import {  Row, Col, Container } from 'react-bootstrap';
import Phone from '../../../src/assets/phone-img.svg';




const  Header = ()=> {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    < div className='Header' >
<Container className='Container'>
  <Row>
    
    <Col md={7} sm={12} data-aos="fade-up"> 
      <div className='content'>
      <h1> Share your <span>Services</span>  and get paid</h1>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt </p>
      <button className='get-started' data-aos="fade-right">GET STARTED</button>
      <button data-aos="fade-left">GET APP</button>
      </div>
      </Col>
      <Col  md={5} sm={12} data-aos="fade-left"> <img  src={Phone} title = "Phone" /> </Col>


  </Row>
</Container>
</div>
  );
}

export default Header;