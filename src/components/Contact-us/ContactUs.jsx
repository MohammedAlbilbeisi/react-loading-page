
import React, { Fragment, useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Row, Col, Container } from 'react-bootstrap';
import './ContactUs.css';
import Girl from '../../../src/assets/Girl.svg';






const ContactUs = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);


  return (

    <Container>

      <div className='ContactUs-box'>
        <Row>

          <Col xs={6} data-aos="fade-up">
            <img src={Girl} title="Girl" />
          </Col>

          <Col xs={6} className='Content' data-aos="fade-down">

            <h5>We are pleased to serve you..</h5>
            <p>Please don't Hesitate to contact </p>
            <button>Contact us</button>
          </Col>
        </Row>


      </div>
    </Container>


  );
}

export default ContactUs;