
import React, { Fragment, useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Bookevent.css';
import { Row, Col, Container } from 'react-bootstrap';
import Bookeventimg1 from '../../../src/assets/Bookevent-img1.png';
import Bookeventimg2 from '../../../src/assets/Group9.png';
import Vector from '../../../src/assets/Vector.svg';





const Bookevent = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);




    return (

        <Fragment  >

            <div className='Bookevent-part1'>
                <Container className='Container'>
                    <Row>

                        <Col md={6} data-aos="fade-right">
                            <img src={Bookeventimg1} title="Bookevent img1" className="img-fluid" />
                        </Col>

                        <Col md={6} data-aos="fade-left">
                            <div className='content'>
                                <h1> Book an event or publish your own event</h1>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam  </p>
                                <div><span> See more </span>  <span>  <img src={Vector} title="Vector" /></span></div>
                            </div>
                        </Col>


                    </Row>
                </Container>
            </div>


            <div className='Bookevent-part2'>
                <Container className='Container'>
                    <Row>

                        <Col md={6} ms={12} data-aos="fade-up">
                            <div className='content'>
                                <h1> Book an event or publish your own event</h1>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam  </p>
                                <div><span> See more </span>  <span>  <img src={Vector} title="Vector" /></span></div>
                            </div>
                        </Col>

                        <Col md={6} ms={12} data-aos="fade-up">
                            <img src={Bookeventimg2} id='Bookeventimg2' className="img-fluid" title="Bookevent img1" />
                        </Col>

                    </Row>
                </Container>
            </div>














        </Fragment>





    );
}

export default Bookevent;