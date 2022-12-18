import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import star from '../assets/star.jpg';

export const DeviceItem = ({ device }) => {
  return (
    <Col md={3}>
      <Card style={{ width: 150, cursor: 'pointer' }} border={'light'}>
        <Image width={150} height={150} src={device.img} />
        <div>
          <div>Samsung</div>
          <div>
            <div>{device.rating}</div>
            <Image src={star} />
          </div>
        </div>
      </Card>
    </Col>
  );
};
