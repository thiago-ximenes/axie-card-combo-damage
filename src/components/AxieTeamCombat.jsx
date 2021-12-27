import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import AxieCards from './AxieCards';

export default function AxieTeamCombat(props) {

  const { axie } = props;
  const { parts } = axie;

  return (
    <Card>
      <Card.Img variant="top" src={ axie.image } />
        <Card.Body>
          <Card.Title>{ axie.name }</Card.Title>
          <AxieCards 
            cards={ parts }
          />
        </Card.Body>
    </Card>
  )
}
