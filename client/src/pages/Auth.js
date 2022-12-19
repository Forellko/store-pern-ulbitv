import React, { useState } from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { REGISTRATION_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import { NavLink, useLocation } from 'react-router-dom';
import { login, registration } from '../http/userAPI';

export function Auth() {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    if (isLogin) {
      const response = await login();
    } else {
      const response = await registration(email, password);
      console.log(response);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            placeholder="введите email"
            className="mt-5"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            placeholder="введите пароль"
            className="mt-4"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Row className="d-flex justify-content-between align-items-center mt-4 px-4">
            {isLogin ? (
              <div style={{ width: '300px' }}>
                Нет аккаунта?{' '}
                <NavLink to={REGISTRATION_ROUTE} style={{ width: '300px' }}>
                  Зарегистрируйся!
                </NavLink>
              </div>
            ) : (
              <div style={{ width: '300px' }}>
                Есть аккаунт?{' '}
                <NavLink to={LOGIN_ROUTE} style={{ width: '300px' }}>
                  Войдите!
                </NavLink>
              </div>
            )}
            <Button
              variant="outline-success"
              style={{ width: '150px' }}
              onClick={signIn}
            >
              {isLogin ? 'Войти' : 'Регистрация'}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
}
