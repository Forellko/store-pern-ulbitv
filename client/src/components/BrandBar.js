import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Card, Row } from 'react-bootstrap';
import { Context } from '..';

export default observer(() => {
  const { device } = useContext(Context);
  return (
    <Row
      className="d-flex flex-row justify-content-between"
      style={{ height: '50px' }}
    >
      {device.brands.map((brand) => (
        <Card
          key={brand.id}
          className="p-3"
          style={{ width: '100px', cursor: 'pointer' }}
          onClick={() => {
            device.setSelectedBrand(brand);
          }}
          border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});
