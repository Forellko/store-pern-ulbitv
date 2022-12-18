import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import star from '../assets/star.png';

export function DevicePage() {
  const device = {
    id: 4,
    name: 'Iphone 12 pro',
    price: 25000,
    rating: 5,
    img: 'none',
  };

  return (
    <Container className="mt-3">
      <Col md={4}>
        <Image width={300} height={300} src={device.img} />
      </Col>
      <Col md={4}>
        <Row className="d-flex flex-column align-items-center">
          <h2>{device.name}</h2>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{
              background: `url(${star}) no-repeat center center`,
              width: 240,
              height: 240,
              backgroundSize: 'cover',
            }}
          >
            {device.rating}
          </div>
        </Row>
      </Col>
      <Col md={4}></Col>
    </Container>
  );
}
