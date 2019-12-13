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
        <a href="https://talibarbosa-hub.github.io/"><i class="icone fab fa-github-alt"></i></a>  
       <a href="https://www.linkedin.com/in/talitabarbosas/"><i class=" icone fab fa-linkedin"></i></a> 
        <a href="mailto:talitabarbosa@live.com"><i class=" icone fas fa-envelope"></i></a>
        <p className="p__footer"> by Talita Barbosa - 2019</p>
        </Container>
        </footer>
    </Fragment>
)

export default Footer

