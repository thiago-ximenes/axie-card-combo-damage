import React from 'react';
import { Row, Container } from 'react-bootstrap';
import { useState } from 'react';
import AxieTeamCombat from '../components/AxieTeamCombat';

export default function AxiesTeam() {


  const storage = localStorage.getItem('axieTeam');
  const [ axieTeam ] = useState(JSON.parse(storage));

  return (
    <Container className="mt-5">
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
    </Container>
  )
}
