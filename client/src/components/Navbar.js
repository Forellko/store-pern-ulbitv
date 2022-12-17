import React, { useContext } from 'react';
import { Context } from '..';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';

export const NavBar = () => {
  const { user } = useContext(Context);

  return (
    <Navbar bg="dark" variant="dark">
      <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
        <NavLink
          style={{ color: 'white', textDecoration: 'none' }}
          to={SHOP_ROUTE}
        >
          Купи Девайс
        </NavLink>
        {user.isAuth ? (
          <Nav style={{ color: 'white' }}>
            <Button variant="outline-light">Админ Панель</Button>
            <Button variant="outline-light">Выйти</Button>
          </Nav>
        ) : (
          <Nav style={{ color: 'white' }}>
            <Button variant="outline-light">Авторизация</Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};
