import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import star from '../assets/star.png';

export const DeviceItem = ({ device }) => {
  return (
    <Col md={3}>
      <Card style={{ width: 150, cursor: 'pointer' }} border={'light'}>
        <Image width={150} height={150} src={device.img} />
        <div className="d-flex justify-content-between align-items-center">
          <div>Samsung</div>
          <div>
            <div>{device.rating}</div>
            <Image height={20} width={20} src={star} />
          </div>
        </div>
      </Card>
    </Col>
  );
};
