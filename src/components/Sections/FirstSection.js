import React from 'react';
import {StyleCard} from '../Cards/Cards'
import Content from '../../utils/content.json'
import Container from 'react-bootstrap/Container';
import '../Cards/cards.css'

const FirstSection =()=>(
    <Container className="display-flex " id ="FirstSection">
    
    {Content.FirstSectionContent.map(item => (
        <StyleCard
        title={item.title}
        text={item.content}>
        </StyleCard>
    ))}
     {/* title= {Content.FirstSectionContent[0].title}
     text={Content.FirstSectionContent[0].content} */}
    
   
   {/* <StyleCard
    title= {Content[1].title}
    text={Content[1].content}
    >
   </StyleCard> */}
   </Container>
)


export default FirstSection