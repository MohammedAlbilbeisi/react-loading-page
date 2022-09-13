import React, { Fragment ,useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import './HowWork.css';
import { Row, Col, Container } from 'react-bootstrap';
import video from '../../../src/assets/video.jpg';
import youtube from '../../../src/assets/youtube.svg';
import run from '../../../src/assets/run.svg';


const HowWork = () => {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);


  return (
    <section className='HowWork'  data-aos="fade-right">

      <h1  data-aos="flip-up">How it <span> work !</span></h1>

      <div className='How-Work-box'>

        <Container>

          <Row>
            <Col xs={12} data-aos="flip-up">
              <img src={video}  className='img-fluid'/>
              <h2>Lorem ipsum dolor sit amet, consetetur </h2>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore </p>
              <img className='youtube-img ' src={youtube} /> <span>YouTube.com</span>
              <img className='run' src={run}  />

            </Col>

          </Row>
        </Container>
      </div>

    </section>


  );
}

export default HowWork;
