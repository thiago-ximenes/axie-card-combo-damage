import React from 'react';
import { useState, useEffect } from 'react';

export default function AxiesTeam() {

  const [ axieTeam, setAxieToTheTeam ] = useState([]);

  useEffect(() => {
    const storage = localStorage.getItem('axieTeam');
    setAxieToTheTeam(JSON.parse(storage));
  }, [])

  return (
    <div>
      {
        axieTeam.map((axie) => (
          <div key={axie.id}>
            <img src={axie.image} alt={axie.name} />
          </div>
        ))
      }
    </div>
  )
}
