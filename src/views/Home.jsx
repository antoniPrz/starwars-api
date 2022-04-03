/* eslint-disable */
import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

import { Context } from '../store/appContext';
import './Home.css';

export default function Home() {
  const { store, actions } = useContext(Context);
  const { starWarsPlanets, starWarsPeople, starWarsVehicles, favoritesList } =
    store;
  const { removeFavorite, addFavorite, getPeople, getPlanets, getVehicles } =
    actions;

  useEffect(() => {
    getPeople();
    getPlanets();
    getVehicles();
  }, []);

  return (
    <>
      <div className='container mt-5'>
        <h1>Planets</h1>
        <div className=' container tarjeta'>
          {starWarsPlanets.map((e, index) => (
            <div className='card-deck carta' key={index}>
              <div className='card mr-4 '>
                <img
                  src='https://valenciaplaza.com/public/Image/2020/9/planeta_NoticiaAmpliada.jpg'
                  className='card-img-top'
                  alt='...'
                />
                <div className='card-body'>
                  <h5 className='card-title'>{e.name}</h5>
                  <p className='card-text'>
                    <b>rotation period:</b> {e.rotation_period} <br />
                    <b>Diameter: </b>
                    {e.diameter} <br />
                    <b>Population: </b>
                    {e.population} <br />
                  </p>

                  <Link
                    to={`/planeta/${index + 1}`}
                    className='btn btn-primary mr-2'
                  >
                    Details
                  </Link>
                  {favoritesList.find((element) => element.name == e.name) ? (
                    <button
                      type='button'
                      className='btn btn-outline-warning active'
                      onClick={() => removeFavorite(e)}
                    >
                      ♥
                    </button>
                  ) : (
                    <button
                      type='button'
                      className='btn btn-outline-warning '
                      onClick={() => addFavorite(e)}
                    >
                      ♥
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <h1>People</h1>
        <div className=' container tarjeta  '>
          {starWarsPeople.map((e, index) => (
            <div className='card-deck carta ' key={index}>
              <div className='card mr-4 '>
                <img
                  src='https://cdn1-www.comingsoon.net/assets/uploads/2015/06/StarWarsRebels.png'
                  className='card-img-top'
                  alt='...'
                />
                <div className='card-body'>
                  <h5 className='card-title'>{e.name}</h5>
                  <p className='card-text'>
                    <b>Mass: </b> {e.mass} <br />
                    <b>Hair color: </b> {e.hair_color}
                    <br />
                    <b>Gender: </b> {e.gender}
                  </p>

                  <Link
                    to={`/people/${index + 1}`}
                    className='btn btn-primary mr-2'
                  >
                    Details
                  </Link>
                  {favoritesList.find((element) => element.name == e.name) ? (
                    <button
                      type='button'
                      className='btn btn-outline-warning active'
                      onClick={() => removeFavorite(e)}
                    >
                      ♥
                    </button>
                  ) : (
                    <button
                      type='button'
                      className='btn btn-outline-warning '
                      onClick={() => addFavorite(e)}
                    >
                      ♥
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h1>Vehicles</h1>
        <div className=' container tarjeta  '>
          {starWarsVehicles.map((e, index) => (
            <div className='card-deck carta ' key={index}>
              <div className='card mr-4 '>
                <img
                  src='https://i.ytimg.com/vi/ncTRcjIzCyw/hqdefault.jpg'
                  className='card-img-top img-fluid w-100'
                  alt='...'
                />
                <div className='card-body'>
                  <h5 className='card-title'>{e.name}</h5>
                  <p className='card-text'>
                    <b>Model: </b>
                    {e.model} <br />
                    <b>Manufacturer: </b>
                    {e.manufacturer} <br />
                    <b>Passengers: </b>
                    {e.passengers} <br />
                  </p>

                  <Link
                    to={`/vehicles/${index + 1}`}
                    className='btn btn-primary mr-2'
                  >
                    Details
                  </Link>
                  {favoritesList.find((element) => element.name == e.name) ? (
                    <button
                      type='button'
                      className='btn btn-outline-warning active'
                      onClick={() => removeFavorite(e)}
                    >
                      ♥
                    </button>
                  ) : (
                    <button
                      type='button'
                      className='btn btn-outline-warning '
                      onClick={() => addFavorite(e)}
                    >
                      ♥
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <h1>Vehicles 2</h1>
      <div className=' container tarjeta  '>
        {starWarsVehicles.map((element, index) => (
          <Card {...element} saludo='hola' index={index} />
        ))}
      </div> */}
      </div>
    </>
  );
}
