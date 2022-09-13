import React, { Fragment, useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Statistics.css';
import { Row, Col, Container } from 'react-bootstrap';
import AppStore from '../../../src/assets/AppStore.svg';
import PlayStore from '../../../src/assets/PlayStore.svg';



const Statistics = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  return (
    <Fragment >
      <div className='Statistics'>
        <Container >
          <Row>
            <Col lg={3} sm={6} xs={12} data-aos="fade-right">   <h5 className='h5'>Live Statist</h5>
              <div className='section num'> 150K <p>Downloaded</p>   </div>
            </Col>
            <Col lg={3} sm={6} xs={12}><div className='section num  mt-5' data-aos="fade-up"> 55K <p>User</p> </div></Col>
            <Col lg={3} sm={6} xs={12}><h5>Available on the</h5>  <div className='section  appStore' data-aos="fade-up"> <img src={AppStore} title="logo" />App Store</div>  </Col>
            <Col lg={3} sm={6} xs={12}><div className='section  appStore mt-5' data-aos="fade-left"> <img src={PlayStore} title="logo" />Play Store</div>  </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
}

export default Statistics;