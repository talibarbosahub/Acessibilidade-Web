import React, {Fragment} from 'react';
import Container from 'react-bootstrap/Container';
import SecondSectionContent from '../../utils/content.json'
import Content from '../../utils/content.json'
import {StyleCard} from '../Cards/Cards'


 const SecondSection=()=>(
    <Fragment>
       <Container>
      <h2 tabindex="0"className="title" id="SecondSection">Diretrizes para um site acessível</h2> 
      <br></br>
        <p tabindex="0"> A W3C (World Wide Web Consortium) é uma organização mundial que desenvolve especificações técnicas e orientações para web. Ou seja, ela quem cria e mantém os padrões para os sites na internet, incluindo os de acessibilidade. O WCAG (Web Content Accessibility Guidelines) é o seu documento que traz as diretrizes de acessibilidade para a web, explicando como tornar o conteúdo acessível para pessoas com deficiências. De acordo com elas, um site acessível segue os seguintes princípios:
        </p>
        <p>
            <ul>
                <li tabindex="0">Perceptível: As informações e interface são apresentadas de uma forma que possa ser percebida; </li>
                <li tabindex="0">Operável: A Interface e a navegação devem ser operáveis para todos os usuários;</li>
                <li tabindex="0">Compreensível: A informação deve ser apresentada de forma simples e compreensível;</li>
                <li tabindex="0">Robusto: O conteúdo deve ser robusto de uma forma que possa maximizar sua compatibilidade com diferentes tipos de pessoas e tecnologias assistivas.</li>
            </ul>
        
       <a href="http://blog.handtalk.me/acessibilidade-na-web/">Fonte: Handletalk</a>
       </p> 
        
        </Container>
        
        <Container className="display-flex">
        {Content.SecondSectionContent.map(item => (
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

export default SecondSection