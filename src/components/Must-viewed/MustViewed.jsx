import React, { Fragment, useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import './MustViewed.css';
import { Row, Col, Container } from 'react-bootstrap';
import Data from '../../Data';
import Vector7 from '../../../src/assets/Vector7.svg';
import Vector8 from '../../../src/assets/Vector8.svg';
import Vector9 from '../../../src/assets/Vector9.svg';
import Vector10 from '../../../src/assets/Vector10.svg';




const MustViewed = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  const MustItem = Data.MustViewed.map((item) => {
    return (
      <Col md={6} sm={12} className='view' key={Math.random()}>
        <Row>
          <Col md={6} sm={12} className='back-img' data-aos="flip-left">
            <img src={item.img} className='img-fluid' />
          </Col>
          <Col md={6} sm={12} data-aos="flip-left">
            <div className='content'>
              <div className='like'><span> <img src={Vector7} /></span> <span>{item.IconText}</span></div>
              <div className='star'><span> <img src={Vector8} /></span> <span>{item.StarNumber}</span></div>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
              <div className='date1'><span><img src={Vector9} /></span> <span>{item.date1}</span></div>
              <div className='date2'><span><span><img src={Vector10} /></span> <img src={Vector9} /></span><span>{item.date2}</span></div>
            </div>
          </Col>

        </Row>


      </Col>


    )

  })



  return (



    <section className='MustViewed'>
      <h1>Must Viewed </h1>
      <Container className='container'>

        <Row>


          {MustItem}



        </Row>

      </Container>

    </section>


  );
}

export default MustViewed;