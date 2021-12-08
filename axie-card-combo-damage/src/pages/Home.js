import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import axieApi from '../services/getAxiesByRoninAdress';
import { Form, Container, Button, Row, Col } from 'react-bootstrap';

export default function Home()
{
  const [axieDetails, setAxieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [roninAddress, setRoninAddress] = useState('');

  function handleSubmit(event)
  {
    event.preventDefault();
    setIsLoading(true);
    axieApi(roninAddress).then((axieDetails) => setAxieDetails(axieDetails));
    setIsLoading(false);
  }
  
  return (
    <Container className="mt-5">
      <Form>
        <Form.Group>
          <Row><Form.Label>Enter Ronin Address</Form.Label></Row>
          <Row>
            <Col>
              <Form.Control
                value={ roninAddress }
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
    </Container>
  );
}
