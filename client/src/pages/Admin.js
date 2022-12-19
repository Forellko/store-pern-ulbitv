import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { CreateBrand } from '../components/modals/CreateBrand';
import { CreateDevice } from '../components/modals/CreateDevice';
import { CreateType } from '../components/modals/CreateType';

export function Admin() {
  const [typeVisible, setTypeVisible] = useState(false);
  const [brandVisible, setBrandVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);

  return (
    <Container className="d-flex flex-column">
      <Button
        variant="outline-dark"
        className="mt-2 p-2"
        onClick={() => setTypeVisible(true)}
      >
        Добавить тип
      </Button>
      <Button
        variant="outline-dark"
        className="mt-2 p-2"
        onClick={() => setBrandVisible(true)}
      >
        Добавить бренд
      </Button>
      <Button
        variant="outline-dark"
        className="mt-2 p-2"
        onClick={() => setDeviceVisible(true)}
      >
        Добавить устройство
      </Button>
      <CreateType onHide={() => setTypeVisible(false)} show={typeVisible} />
      <CreateBrand onHide={() => setBrandVisible(false)} show={brandVisible} />
      <CreateDevice
        onHide={() => setDeviceVisible(false)}
        show={deviceVisible}
      />
    </Container>
  );
}
