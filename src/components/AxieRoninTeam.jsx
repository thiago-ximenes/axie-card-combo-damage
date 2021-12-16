import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function AxieRoninTeam(props) {

  const [ select, setSelect ] = useState('Select');
  const [ buttonVariant, setButtonVariant ] = useState('success');

  const { axieInfo, axieIdReceived, teamIsFull } = props;
  const { image, id } = axieInfo;

  useEffect(() => {
    if (teamIsFull && select !== 'Remove') {
      setSelect('Team is full');
      setButtonVariant('secondary');
    } else if (select === 'Remove') {
      setButtonVariant('danger');
    } else {
      setSelect('Select');
      setButtonVariant('success');
    }
  }, [teamIsFull, select]);

  function handleClick() {
    if (select === 'Select' && !teamIsFull) {
      setSelect('Remove');
    } else if (teamIsFull) {
      setSelect('Team is full');
    } else {
      setSelect('Select');
    }
    axieIdReceived(id);
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
