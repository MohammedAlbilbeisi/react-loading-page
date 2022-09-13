import React, { Fragment, useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Account.css';
import { Row, Col, Container } from 'react-bootstrap';
import User from '../../../src/assets/user.svg';
import Talentowner from '../../../src/assets/Talent-owner.svg';
import Spaceowner from '../../../src/assets/Space-owner.svg';
import Organization from '../../../src/assets/Organization.svg';



const Account = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  return (
    <Fragment >

      <div className='Account '>
        <Container className='container'>
          <Row>
            <Col md={4} ms={12}>
              <div className='content'>
                <span data-aos="fade-left"> Create an User account</span>
                <span data-aos="fade-left"><img src={User} title="Talent-owner " /></span>
              </div>
            </Col>
            <Col md={4} ms={12}>  </Col>
            <Col md={4} ms={12}> <button data-aos="fade-right">Create account</button></Col>
          </Row>
        </Container>
      </div>



      <div className='Account-type '>
        <Container className='container'>
          <Row>
            <Col md={4} className='no-padding ' data-aos="fade-right">

              <section>
                <div className='content Talentowner'>

                  <img src={Talentowner} title="Space-owner" />
                  <h5>Talent owner</h5>
                  <p>150K User</p>
                  <button>Create account</button>

                </div>
              </section>
            </Col>
            <Col md={4} data-aos="fade-up">

              <section>
                <div className='content Spaceowner ' >

                  <img src={Spaceowner} title="Bookevent img1" />
                  <h5>Space owner</h5>
                  <p>120K User</p>
                  <button>Create account</button>

                </div>
              </section>

            </Col>

            <Col md={4} className='no-padding ' data-aos="fade-left">
              <section>

                <div className='content Organization '>
                  <img src={Organization} title="Organization" />
                  <h5>Organization</h5>
                  <p>80K User</p>
                  <button>Create account</button>

                </div>
              </section>

            </Col>
          </Row>
        </Container>
      </div>

    </Fragment >


  );
}

export default Account;
