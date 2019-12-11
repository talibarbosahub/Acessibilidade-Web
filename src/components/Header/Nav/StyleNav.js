import React from 'react';
import {Navbar, Nav, NavDropdown,Form, FormControl, Button} from 'react-bootstrap';
import './styleNav.css'

const StyleNav = () =>(
    <Navbar className="styleNav" expand="lg">
      <Navbar.Brand tabindex="-1"href="#home">
      {
        window.screen.width <= 768 ? <span className="menu">Selecione o tópico pelo menu ao lado</span> :""
      }

      </Navbar.Brand>
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">O que é, e qual a importancia?</Nav.Link>
      <Nav.Link href="#link">Diretrizes para um site acessivel e check-list</Nav.Link>
      <Nav.Link href="#link">Tecnologias Assistivas</Nav.Link>
      <Nav.Link href="#link">Ferramentas de acessibilidade para desenvolvedores</Nav.Link>
      <NavDropdown  title="Pesquisar" id="basic-nav-dropdown">
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