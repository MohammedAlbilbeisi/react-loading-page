
import React, { Fragment ,useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import "./Providers.css";
import { Row, Col, Container } from "react-bootstrap";
import Data from "../../Data";
import Provideritem from "./Provideritem";

const Providers = () => {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  const dataProviders = Data.Providers.map((item) => {
    return (
      <Col md={4} data-aos="zoom-in"  key={Math.random()}>
        <Provideritem
          image={item.img}
          Name={item.Name}
          description={item.description}
        />
      </Col>
    );
  });

  return (
    <section >
      <Container>
        <h1 data-aos="fade-right">Top Providers </h1>
        <Row>{dataProviders}</Row>
      </Container>
    </section>
  );
};

export default Providers;
