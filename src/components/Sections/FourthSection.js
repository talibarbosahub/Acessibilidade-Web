import React, {Fragment} from 'react';
import Container from 'react-bootstrap/Container';
import FourthSectionContent from '../../utils/content.json'
import Content from '../../utils/content.json'
import {StyleCard} from '../Cards/Cards'


 const FourthSection=()=>(
    <Fragment>
       <Container>
      <h2 tabindex="0" className="title" id ="FourthSection">Ferramentas de acessibilidade para desenvolvedores</h2> 
      <br></br>
        <p tabindex="0">
        Depois de aplicar todo esse conhecimento, é hora de testá-lo. Aqui está uma lista das melhores ferramentas para auditar a acessibilidade do site: 

        <p><a href="https://medium.com/@oieduardorabelo/10-diretrizes-para-melhorar-sua-acessibilidade-na-web-6e35844f9859">Fonte:Eduardo Rabelo - Diretrizes para melhorar sua Acessibilidade na web</a></p>
             
        </p>
        <p><a href="http://www.assistiva.com.br/tassistiva.html/">Fonte: Assitiva</a></p>
        </Container>
        
        <Container className="display-flex">
        {Content.FourthSectionContent.map(item => (
        <StyleCard
        title={item.title}
        text={item.content}
        reference={item.reference}> 
        </StyleCard>
    ))}
        </Container>  
    </Fragment>
)

export default FourthSection