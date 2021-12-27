import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';

export default function AxieTeamCombat(props) {

  const { axie } = props;

  return (
    <Card>
      <Card.Img variant="top" src={ axie.image } />
        <Card.Body>
          <Card.Title>{ axie.name }</Card.Title>
        </Card.Body>
    </Card>
  )
}
