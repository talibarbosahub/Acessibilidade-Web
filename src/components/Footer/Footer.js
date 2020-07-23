import React, {Fragment} from 'react';
import {Container} from 'react-bootstrap'
import './footer.css'

const Footer=()=>(
    <Fragment>

        <footer tabindex="0" aria-label="Rodaré com as tecnologias que foram utilizadas no site e informações de contato e redes sociais da desenvolvedora"className="footer">
        
        <Container className="icons__develop">
        <i  class=" icone fab fa-react"></i>
        <i class="icone fab fa-bootstrap"></i>
        <p tabindex="0" aria-label="Site desenvolvido com React e Bootstrap "className="p__footer">Desenvolvido com</p>
         </Container>
        <Container   className="autor__media">
        <a tabindex="0" aria-label="ícone com link para acessar página do Git Hub da Desevolvedora" href="https://talibarbosa-hub.github.io/"><i class="icone fab fa-github-alt"></i></a>
        <a tabindex="0" aria-label="ícone com link para acessar página do Linkedin da Desevolvedora"href="https://www.instagram.com/eutalibarbosa/"><i class=" icone fa fa-instagram"></i></a> 
        <a tabindex="0" aria-label="ícone com link para acessar página do Instagram da Desevolvedora"href="https://www.linkedin.com/in/talitabarbosas/"><i class=" icone fab fa-linkedin"></i></a>
        <a tabindex="0" aria-label="ícone com link para acessar o e-mail da Desevolvedora"href="mailto:talitabarbosa@live.com"><i class=" icone fas fa-envelope"></i></a>
        <p  className="p__footer"> Encontre-me nas redes sociais!</p>
        </Container>
        </footer>
    </Fragment>
)

export default Footer

