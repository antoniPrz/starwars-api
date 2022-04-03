/* eslint-disable */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Vehicles() {
  const { index } = useParams();
  const [vehicle, setVehicle] = useState([]);

  useEffect(() => {
    fetch(`https://swapi.dev/api/vehicles/${index + 5}`)
      .then((r) => r.json())
      .then((data) => setVehicle(data))
      .catch((error) => console.log(error));
  }, []);
  console.log(vehicle);

  return (
    <div className='container '>
      <h1 className='m-5 bg-red'>{vehicle.name}</h1>
      <div className='card mb-3'>
        <div className='row no-gutters'>
          <div className='col-md-4'>
            <img
              src='https://cdn1-www.comingsoon.net/assets/uploads/2015/06/StarWarsRebels.png'
              alt='...'
            />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h5 className='card-title'>{vehicle.name}</h5>
              <p className='card-text'>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className='card-text'>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
