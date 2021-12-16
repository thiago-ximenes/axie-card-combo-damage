import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import { useState } from 'react';

export default function AxieRoninTeam(props) {

  const [ select, setSelect ] = useState('Select');
  const [ buttonVariant, setButtonVariant ] = useState('success');

  const { axieInfo } = props;
  const { image } = axieInfo;

  function handleClick() {
    if (select === 'Select') {
      setSelect('Remove');
      setButtonVariant('danger');
    } else {
      setButtonVariant('success');
      setSelect('Select');
    }
  }

  return (
    <Col lg={3} sm={1}>
      <Card>
        <Card.Img variant="top" src={ image } />
        <Card.Body>
            <Row>
              <Button
                size="lg"
                variant={ buttonVariant }
                onClick={ handleClick }
              >
                {select}
              </Button>
            </Row>
        </Card.Body>
      </Card>
    </Col>
  )
}
