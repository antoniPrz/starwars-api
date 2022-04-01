/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Planeta() {
  const { index } = useParams();
  const [planeta, setplaneta] = useState([]);

  useEffect(() => {
    fetch(`https://swapi.dev/api/planets/${index}`)
      .then((r) => r.json())
      .then((data) => setplaneta(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='container'>
      <div className='card mb-3'>
        <div className='row no-gutters'>
          <div className='col-md-4'>
            <img src='https://picsum.photos/id/1002/200/300' alt='...' />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h5 className='card-title'>{planeta.name}</h5>
              <p className='card-text'>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className='card-text'>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </p>
              <p className='card-text'> </p>
              <p className='card-text'> Tipo de terreno: {planeta.terrain} </p>
              <p className='card-text'> Tipo de Clima: {planeta.climate} </p>
              <p className='card-text'> Gravedad : {planeta.gravity} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
