import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

export const CreateBrand = ({ show, onHide }) => {
  return (
    <Modal size="lg" centered show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить тип
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control placeholder={'Введите название типа'} />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger">Закрыть</Button>
        <Button variant="outline-success">Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};
