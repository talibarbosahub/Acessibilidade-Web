import React, {Fragment} from 'react';
import Container from 'react-bootstrap/Container';
import Content from '../../utils/content.json'
import {StyleCard} from '../Cards/Cards'


 const ThirdSection=()=>(
    <Fragment>
       <Container >
      <h2 tabindex="0" className="SectionTitle" id ="ThirdSection">Tecnologias assistivas</h2> 
      <br></br>
        <p tabindex="0"> Tecnologia Assistiva é um termo, utilizado para identificar todo o arsenal de Recursos e Serviços que contribuem para proporcionar ou ampliar habilidades funcionais de pessoas com deficiência e consequentemente promover Vida Independente e Inclusão.

            Seu objetivo é proporcionar à pessoa com deficiência maior independência, qualidade de vida e inclusão social, através da ampliação de sua comunicação, mobilidade, controle de seu ambiente, habilidades de seu aprendizado, trabalho e integração com a família, amigos e sociedade.
            
        </p>
        <p><a href="http://www.assistiva.com.br/tassistiva.html/">Fonte: Assitiva</a></p>
        </Container>
        
        <Container className="display-flex">
        {Content.ThirdSectionContent.map(item => (
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

export default ThirdSection