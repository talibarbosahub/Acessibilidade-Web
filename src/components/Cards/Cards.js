import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import './cards.css'


export const StyleCard = (props) => (
  <Card>
    <Card.Img variant="top" src={props.image} />
    <Card.Body>
      <Card.Title tabindex="">{props.title}
      </Card.Title>
      {/* <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle> */}
      <Card.Text tabindex="">
        {props.text}
      </Card.Text>
      {/* <Button variant="primary">Go somewhere</Button> */}
      <Card.Link tabindex="" href="#">{props.reference}</Card.Link>
    </Card.Body>
  </Card>
)

export const BlockQuote = () => (
  <Container className="quote__container">
    <Card className="p-3">
      <blockquote className="blockquote mb-0 card-body">
        <div className="quote__style"><p>
          "O poder da Web está em sua universalidade. O acesso de todos, independentemente da deficiência, é um aspecto essencial."</p>
          <footer className="blockquote-footer">
            <small className="text-muted">
              Tim Berners-Lee, <cite title="Source Title">diretor do W3C e inventor da World Wide Web</cite>
            </small>
          </footer>
        </div>

      </blockquote>
    </Card>
  </Container>
)



