import React, {Fragment} from 'react';
//import '../Cards/cards.css'
import Texto from '../../utils/content.json'
import Container from 'react-bootstrap/Container';
import {StyleCard} from '../Cards/Cards'
import './main.css'

 const SecondSection=()=>(
    <Fragment>
        <Container className="main">
      <h2>Diretrizes para um site acessível</h2> 
        <p> A W3C (World Wide Web Consortium) é uma organização mundial que desenvolve especificações técnicas e orientações para web. Ou seja, ela quem cria e mantém os padrões para os sites na internet, incluindo os de acessibilidade. O WCAG (Web Content Accessibility Guidelines) é o seu documento que traz as diretrizes de acessibilidade para a web, explicando como tornar o conteúdo acessível para pessoas com deficiências. De acordo com elas, um site acessível segue os seguintes princípios:
            •	Perceptível: As informações e interface são apresentadas de uma forma que possa ser percebida;
            •	Operável: A Interface e a navegação devem ser operáveis para todos os usuários;
            •	Compreensível: A informação deve ser apresentada de forma simples e compreensível;
            •	Robusto: O conteúdo deve ser robusto de uma forma que possa maximizar sua compatibilidade com diferentes tipos de pessoas e tecnologias assistivas.
            
            Fonte: http://blog.handtalk.me/acessibilidade-na-web/
        </p>
        </Container> 
        <Container>
        <StyleCard
        title= {Texto[3].title}
        text={Texto[3].content}
        image={Texto[3].image}
        >
    </StyleCard>
    <StyleCard
        title= {Texto[4].title}
        text={Texto[4].content}
        image={Texto[4].image}
        >
   </StyleCard>
        </Container>  
    </Fragment>
)

export default SecondSection