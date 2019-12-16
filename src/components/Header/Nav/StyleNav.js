import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
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
      <Nav.Link href="#FirstSection">O que é, e qual a importancia?</Nav.Link>
      <Nav.Link href="#SecondSection">Diretrizes para um site acessível </Nav.Link>
      <Nav.Link href="#ThirdSection">Tecnologias Assistivas</Nav.Link>
      <Nav.Link href="#FourthSection">Ferramentas para desenvolvedores</Nav.Link>
      {/* <NavDropdown  title="Pesquisar" id="basic-nav-dropdown">
        <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="dark">Search</Button>
    </Form> 
      </NavDropdown> */}
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
)


export default StyleNav