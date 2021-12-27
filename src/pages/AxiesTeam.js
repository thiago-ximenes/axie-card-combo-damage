import React from 'react';
import { useState, useEffect } from 'react';

export default function AxiesTeam() {


  const storage = localStorage.getItem('axieTeam');
  const [ axieTeam ] = useState(JSON.parse(storage));
  const [ axieDetails, setAxieDetails ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);

  console.log(axieTeam);

  return (
    <div>
      <h1>Axie Team</h1>
      { isLoading ? <p>Loading...</p> : 
      <img src={axieDetails.image}  alt={axieDetails.name} />
      }
    </div>
  )
}
