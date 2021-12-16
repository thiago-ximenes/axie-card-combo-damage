import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import Loader from 'react-loader-spinner';
import axieApi from '../services/getAxiesByRoninAdress';
import { Form, Container, Button, Row, Col, InputGroup } from 'react-bootstrap';
import AxieRoninTeam from '../components/AxieRoninTeam';
// import { useNavigate } from 'react-router-dom';

export default function Home()
{
  const [roninDetails, setRoninDetails] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const [roninAddress, setRoninAddress] = useState('');
  const [isGoButtonDisable, setGoButtonEnable] = useState(true);    const [ axieTeam, setAxieToTheTeam ] = useState([]);
  const [ teamIsFull, setTeamIsFull ] = useState(false);

  // const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('roninAddress')) {
      setRoninAddress(localStorage.getItem('roninAddress'));
    }
  }, [])

  useEffect(() => {
    if(roninAddress.length === 40)
      setGoButtonEnable(false);
    else
      setGoButtonEnable(true);
  }, [roninAddress])

  useEffect(() => {
    if(axieTeam.length === 3) {
      setTeamIsFull(true);
    } else {
      setTeamIsFull(false);
    }
  }, [axieTeam])

  function handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem('roninAddress', roninAddress);
    axieApi(roninAddress).then((roninDetails) => setRoninDetails(roninDetails));
    // navigate('/axie-team');
  }

  function handleOnChange (event) {
    setRoninAddress(event.target.value);
  }

  function addAxieToTeam(id) {
    if (axieTeam.includes(id)) {
      setAxieToTheTeam(axieTeam.filter(axie => axie !== id));
    } else if (axieTeam.length < 3) {
    setAxieToTheTeam([ ...axieTeam, id ]);
    }
  }

  return (
    <Container className="mt-5">
      <Form>
        <Form.Group>
          <Row><Form.Label>Enter The Ronin Address</Form.Label></Row>
          <Row>
            <InputGroup>
              <InputGroup.Text>ronin:</InputGroup.Text>
            <Col>
              <Form.Control
                value={ roninAddress }
                onChange={ handleOnChange }
                type="text"
                placeholder="Enter Ronin Address"
                />
              </Col>
            </InputGroup>
          </Row>
            <div className="d-grid gap-2">
              <Button
                className="mt-1"
                size="lg"
                disabled={ isGoButtonDisable }
                variant="primary"
                type="submit"
                onClick={ handleSubmit }
                >
                Go
              </Button>
            </div>
        </Form.Group>
      </Form>
      <h2 className="text-center">Select The Axie Team</h2>
      <Row className='g-3 container mt-1 justify-content-md-center' xs={1} md={3}>
        { roninDetails.length > 0 && (
          roninDetails.map((axie) => {
            return (
              <AxieRoninTeam
                key={ axie.id }
                axieInfo={ axie }
                axieIdReceived={ addAxieToTeam }
                teamIsFull={ teamIsFull }
              />
            );
          })
        )}
      </Row>
    </Container>
  );
}
