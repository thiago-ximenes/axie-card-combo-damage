import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import axieApi from '../services/getAxiesByRoninAdress';
import { Form, Container, Button, Row, Col } from 'react-bootstrap';
import AxieRoninTeam from '../components/AxieRoninTeam';
// import { useNavigate } from 'react-router-dom';

export default function Home()
{
  const [roninDetails, setRoninDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [roninAddress, setRoninAddress] = useState('');

  // const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem('roninAddress', roninAddress);
    axieApi(roninAddress).then((roninDetails) => setRoninDetails(roninDetails));
    // navigate('/axies-team');
  }
  
  return (
    <Container className="mt-5">
      <Form>
        <Form.Group>
          <Row><Form.Label>Enter Ronin Address</Form.Label></Row>
          <Row>
            <Col>
              <Form.Control
                value={ `ronin:${roninAddress}` }
                onChange={ (e) => setRoninAddress(e.target.value) }
                type="text"
                placeholder="Enter Ronin Address"
              />
              </Col>
              <Col xs="auto">
              <Button
                variant="primary"
                type="submit"
                onClick={ handleSubmit }
              >
                Go
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
      <Row className='g-3 container mt-1 justify-content-md-center' xs={1} md={3}>
        { roninDetails.length > 0 && (
          roninDetails.map((axie) => {
            return (
              <AxieRoninTeam
                key={ axie.id }
                axieInfo={ axie }
              />
            );
          })
        )}
      </Row>
    </Container>
  );
}
