/* eslint-disable */
/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';

export default function People() {
  const { index } = useParams();
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${index}`)
      .then((r) => r.json())
      .then((data) => setPeople(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='container'>
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
              <h5 className='card-title'>{people.name}</h5>
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
