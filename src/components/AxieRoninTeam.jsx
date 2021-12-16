import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';

export default function AxieRoninTeam(props) {

  const { axieInfo } = props;
  const { image, name } = axieInfo;

  console.log(axieInfo);

  return (
    <Col lg={3} sm={1}>
      <Card>
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
