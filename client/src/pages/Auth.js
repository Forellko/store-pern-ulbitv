import React from 'react';
import { Button, Card, Container, Form, NavLink, Row } from 'react-bootstrap';
import { REGISTRATION_ROUTE } from '../utils/consts';

export function Auth() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">Авторизация</h2>
        <Form className="d-flex flex-column">
          <Form.Control placeholder="введите email" className="mt-4" />
          <Form.Control placeholder="введите пароль" className="mt-4" />
          <Row className="d-flex justify-content-between align-items-center mt-3 px-4">
            <span style={{ width: '300px' }}>
              Нет аккаунта?
              <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
            </span>
            <Button variant="outline-success" style={{ width: '100px' }}>
              Войти
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
}
