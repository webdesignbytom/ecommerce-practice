import React from 'react';
// Bootstrap
import { Button, Container, Navbar, Modal } from 'react-bootstrap';
// Styles
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarComponent() {
  return (
    <Navbar expand='sm'>
      <Navbar.Brand href='/'>Ecommerce Store</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className='justify-content-end'>
        <Button>Cart 0 Items</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
