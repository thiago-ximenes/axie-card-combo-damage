import React, { useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import AxieTeamCombat from '../components/AxieTeamCombat';
import DPS from '../images/DPS.png';
import duelist from '../images/duelist.png';
import tank from '../images/tank.png';

export default function AxiesTeam() {


  const storage = localStorage.getItem('axieTeam');
  const [ axieTeam ] = useState(JSON.parse(storage));
  const [ total , setTotal ] = useState(0);

  return (
    <Container fluid className="mt-5">
      <h1 className="text-center mb-4">Combat Time!</h1>
      <Row xs={1} md={3} className="g-3">
        {
          axieTeam.map((
            axie,
            ) => (
            <AxieTeamCombat 
              axie={ axie }
            />
            )
          )
        }
      </Row>
      <Row xs={1} md={3} className="g-3">
          <Card>
           <Row className="mb-3">
              <Col>
                <Card.Img
                  className="mt-1"
                  src={ tank }
                />
              </Col>
              <Col>
                <Card.Body>
                  <Card.Title>Tank</Card.Title>
                </Card.Body>
              </Col>
           </Row>
        </Card>
          <Card>
           <Row>
              <Col>
                <Card.Img
                  className="mt-1"
                  src={ duelist }
                />
              </Col>
              <Col>
                <Card.Body >
                  <Card.Title>Tank</Card.Title>
                </Card.Body>
              </Col>
           </Row>
        </Card>
          <Card>
           <Row>
              <Col>
                <Card.Img
                  className="mt-1"
                  src={ DPS }
                />
              </Col>
              <Col>
                <Card.Body >
                  <Card.Title>Tank</Card.Title>
                </Card.Body>
              </Col>
           </Row>
        </Card>
        
      </Row>
    </Container>
  )
}
