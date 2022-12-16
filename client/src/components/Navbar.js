import React, { useContext } from 'react';
import { Context } from '..';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';

export const NavBar = () => {
  const { user } = useContext(Context);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink
          style={{ color: 'white', textDecoration: 'none' }}
          to={SHOP_ROUTE}
        >
          Купи Девайс
        </NavLink>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
