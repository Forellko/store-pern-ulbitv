import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BrandBar from '../components/BrandBar';
import TypeBar from '../components/TypeBar';

export function Shop() {
  return (
    <Container>
      <Row className="mt-5">
        <Col md={3}>
          <TypeBar />
        </Col>
        <BrandBar />
        <Col md={9}></Col>
      </Row>
    </Container>
  );
}
