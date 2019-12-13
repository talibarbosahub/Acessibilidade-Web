import React, {Fragment} from 'react';
import {Container} from 'react-bootstrap'
import './footer.css'

const Footer=()=>(
    <Fragment>

        <footer className="footer">
        
        <Container tabindex="0"className="icons__develop">
        <i class=" icone fab fa-react"></i>
        <i class="icone fab fa-bootstrap"></i>
        <p className="p__footer">Developed with</p>
         </Container>
        <Container className="autor__media">
        <i class="icone fab fa-github-alt"></i>
        <i class=" icone fab fa-linkedin"></i>
        <i class=" icone fas fa-envelope"></i>
        <p className="p__footer"> by Talita Barbosa - 2019</p>
        </Container>
        </footer>
    </Fragment>
)

export default Footer

