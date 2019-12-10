import React from 'react';
import {Navbar, Nav, NavDropdown,Form, FormControl, Button} from 'react-bootstrap';
import './styleNav.css'

const StyleNav = () =>(
    <Navbar className="styleNavBack" expand="lg">
      <Navbar.Brand tabindex="-1"href="#home">
      {
        window.screen.width <= 768 ? "Menu" :""
      }

      </Navbar.Brand>
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link className="navLink" href="#home">O que é, e qual a importancia?</Nav.Link>
      <Nav.Link className="navLink"href="#link">Diretrizes para um site acessivel e check-list</Nav.Link>
      <Nav.Link className="navLink"href="#link">Tecnologias Assistivas</Nav.Link>
      <Nav.Link className="navLink"href="#link">Ferramentas de acessibilidade para desenvolvedores</Nav.Link>
      <NavDropdown  className="navLink" title="Pesquisar" id="basic-nav-dropdown">
        <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="dark">Search</Button>
    </Form> 
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
)


export default StyleNav