import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Cards from './Cards';
import '../css/axieCards.css';

export default function AxieCards(props) {

  const { cards } = props;
  

  return (
    <Row md={2} xs={2} className="g-2">
      {
        cards.map((card, index) => {
            const { abilities } = card;
            if (index > 1) return (
              <Col className="mb-2">
                  <Cards
                    key={ card.id }
                    src={ abilities[0].backgroundUrl }
                    alt={ abilities[0].name }
                  />
              </Col>
            )
            return false;
          })
      }
    </Row>
  )
}
