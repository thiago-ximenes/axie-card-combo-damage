import React from 'react';
import { Card, Col } from 'react-bootstrap';

export default function AxieTeamSelected(props) {
  const { axieInfo, name } = props;
  const { image } = axieInfo;
  return (
    <Col lg={3} sm={1}>
      <Card>
        <Card.Img variant="top" src={ image } />
        <Card.Body>
          <Card.Title>
            {name}
          </Card.Title>
        </Card.Body>
      </Card>
    </Col>
  )
}
