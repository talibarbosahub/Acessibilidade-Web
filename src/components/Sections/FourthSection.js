import React, {Fragment} from 'react';
import Container from 'react-bootstrap/Container';
import Content from '../../utils/content.json'
import {StyleCard} from '../Cards/Cards'


 const FourthSection=()=>(
    <Fragment>
       <Container >
      <h2 tabindex="0" className="SectionTitle" id ="FourthSection">Ferramentas de acessibilidade para desenvolvedores</h2> 
      <br></br>
        <p tabindex="0">
        Depois de aplicar todo esse conhecimento no seu site, é hora de testá-lo. Aqui está uma lista das melhores ferramentas para auditar a acessibilidade: 
    
        </p>
        </Container>
        
        <Container className="display-flex">
        {Content.FourthSectionContent.map(item => (
        <StyleCard
        title={item.title}
        image={item.image}
        alt={item.alt}
        text={item.content}
        reference={item.reference}
        fonte={item.fonte}>
        
        </StyleCard>
    ))}
        </Container>
    </Fragment>
)

export default FourthSection