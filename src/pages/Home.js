import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import axieApi from '../services/getAxiesByRoninAdress';
import { Form, Container, Button, Row, Col, InputGroup, Card } from 'react-bootstrap';
import AxieRoninTeam from '../components/AxieRoninTeam';
import AxieTeamSelected from '../components/AxieTeamSelected';
import Loader from 'react-loader-spinner';
// import { useNavigate } from 'react-router-dom';

export default function Home()
{
  const [roninDetails, setRoninDetails] = useState([]);
  const [roninAddress, setRoninAddress] = useState('');
  const [isGoButtonDisable, setGoButtonEnable] = useState(true);    const [ axieTeam, setAxieToTheTeam ] = useState([]);
  const [ teamIsFull, setTeamIsFull ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(false);

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
    setIsLoading(true);
    axieApi(roninAddress).then((roninDetails) => setRoninDetails(roninDetails));
    setIsLoading(false);
    // navigate('/axie-team');
  }

  function handleOnChange (event) {
    setRoninAddress(event.target.value);
  }

  function addAxieToTeam(id) {
    const axieSelected = roninDetails.find((axie) => axie.id === id);
    if (axieTeam.includes(axieSelected)) {
      setAxieToTheTeam(axieTeam.filter((axie) => axie !== axieSelected));
    } else if (axieTeam.length < 3) {
    setAxieToTheTeam([ ...axieTeam, axieSelected ]);
    }
  }

  console.log(axieTeam)

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
      { axieTeam.length > 0 && (
      <Card bg="dark">
        <Row className='g-3 container mt-1 justify-content-md-center mb-4' xs={1} md={3}>
          { axieTeam.map((axie) => {
                return (
                  <AxieTeamSelected
                    key={ axie.id }
                    axieInfo={ axie }
                    teamIsFull={ teamIsFull }
                    name={ axie.name }
                  />
                );
              })
          }
          <Button
            size="lg"
            disabled={ !teamIsFull }
            variant={ teamIsFull ? 'success' : 'secondary' }
          >
            { teamIsFull ? "Let's Rock!" : `Add More ${ 3 - axieTeam.length } Axies` }
          </Button>
        </Row>
      </Card>
      )}
      { isLoading && 
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={80}
        width={80}
        className="text-center"
      />
     }
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
