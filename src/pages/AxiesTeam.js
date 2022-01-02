import React, { useState } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
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
          <Card.Img
            className="mt-1"
            variant="left"
            src={ tank }
          />
        </Card>
        <Card>
          <Card.Img
            variant="left"
            src={ duelist }
          />
        </Card>
        <Card>
          <Card.Img
            variant="left"
            src={ DPS }
          />
        </Card>
      </Row>
    </Container>
  )
}
