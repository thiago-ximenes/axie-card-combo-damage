import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import '../css/axieCards.css';

export default function AxieCards(props) {

  const { cards } = props;

  console.log(cards);

  return (
    <Row md={2} xs={2} className="g-2">
      {
        cards.map((card, index) => {
            const { abilities } = card;
          if (index > 1) return (
            <Col className="mb-2">
              <Card.Img
                className="card-img"
                key={ card.id }
                src={ abilities[0].backgroundUrl }
                alt={ abilities[0].name }
              />
          {/* <div>{ abilities[0].attack }</div>
              <div>{ abilities[0].defense }</div>
              <div>{ abilities[0].description }</div>
              <img src={ abilities[0].effectIconUrl }  alt={ card.name }/>
              <div>{ abilities[0].energy }</div>
              <div>{ abilities[0].name }</div> */}
            </Col>
          )
        })
      }
    </Row>
  )
}
