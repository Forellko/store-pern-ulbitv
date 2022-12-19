import React, { useContext } from 'react';
import { Context } from '..';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';

export const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    navigate(LOGIN_ROUTE);
  };

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
            <Button
              onClick={() => {
                navigate(ADMIN_ROUTE);
              }}
              variant="outline-light"
            >
              Админ Панель
            </Button>
            <Button
              onClick={() => logOut()}
              variant="outline-light"
              style={{ marginLeft: '10px' }}
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav style={{ color: 'white' }}>
            <Button
              variant="outline-light"
              onClick={() => {
                navigate(LOGIN_ROUTE);
              }}
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});
