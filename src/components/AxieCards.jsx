import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import '../css/axieCards.css';

export default function AxieCards(props) {

  const { cards } = props;
  const [ numberOfCardsUsed, setNumberOfCardsUsed ] = React.useState(0);

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
            </Col>
          )
        })
      }
    </Row>
  )
}
