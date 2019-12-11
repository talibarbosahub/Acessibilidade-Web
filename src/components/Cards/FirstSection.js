import React from 'react';
import {StyleCard} from './Cards'
import Texto from '../../utils/content.json'
import Container from 'react-bootstrap/Container';
import './cards.css'

const FirstSection =()=>(
    <Container>
    <StyleCard
    title= {Texto[0].title}
    text={Texto[0].content}
    >
   </StyleCard>
   <StyleCard
    title= {Texto[1].title}
    text={Texto[1].content}
    >
   </StyleCard>
   </Container>
)


export default FirstSection