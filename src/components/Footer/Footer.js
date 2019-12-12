import React, {Fragment} from 'react';
import {Container} from 'react-bootstrap'
import './footer.css'

const Footer=()=>(
    <Fragment>
        <footer className="footer">
        <Container className="icons__develop">
        <p>Desenvolvido com : </p>
        <i class=" icone fab fa-react"></i>
        <i class="icone fab fa-bootstrap"></i>
         </Container>
        <Container className="autor__media">
        <i class="icone fab fa-github-alt"></i>
        <i class=" icone fab fa-linkedin"></i>
        <i class=" icone fas fa-envelope"></i>
        <p> 2019 - Talita Barbosa</p>
        </Container>
        </footer>
    </Fragment>
)

export default Footer

