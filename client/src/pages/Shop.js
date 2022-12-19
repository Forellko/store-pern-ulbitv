import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Context } from '..';
import BrandBar from '../components/BrandBar';
import { DeviceList } from '../components/DeviceList';
import TypeBar from '../components/TypeBar';
import { fetchTypes } from '../http/deviceAPI';

export const Shop = observer(() => {
  const { device } = useContext(Context);

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
  }, []);

  return (
    <Container>
      <Row className="mt-5">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
        </Col>
      </Row>
    </Container>
  );
});
