import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';

export default function AxieRoninTeam(props) {

  const { axieInfo } = props;
  const { image, name } = axieInfo;

  console.log(axieInfo);

  return (
    <Col md="auto">
      <Card style={{ width: '12rem' }}>
        <Card.Img variant="top" src={ image } />
        <Card.Body>
            <Row>
              <Button variant="success">Select</Button>
            </Row>
        </Card.Body>
      </Card>
    </Col>
  )
}
