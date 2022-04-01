/* eslint-disable */

import { Link } from 'react-router-dom';
import React, { useEffect, useContext, useState } from 'react';

import { Context } from '../store/appContext';

export default function Card(props) {
  const { store, actions } = useContext(Context);
  const { starWarsPlanets, starWarsPeople, starWarsVehicles, favoritesList } =
    store;
  const { removeFavorite, addFavorite, getPeople, getPlanets, getVehicles } =
    actions;

  return (
    <>
      <div className='card-deck carta '>
        <div className='card mr-4 ' key={props.index}>
          <img
            src='https://valenciaplaza.com/public/Image/2020/9/planeta_NoticiaAmpliada.jpg'
            className='card-img-top'
            alt='...'
          />
          <div className='card-body'>
            <h5 className='card-title'>{props.name}</h5>
            <p className='card-text'>
              <b>rotation period:</b> {props.rotation_period} <br />
              <b>Diameter: </b>
              {props.diameter} <br />
              <b>Population: </b>
              {props.population} <br />
            </p>

            <Link
              to={`/planeta/${props.index + 1}`}
              className='btn btn-primary'
            >
              Details
            </Link>
            {favoritesList.find((element) => element.name == props.name) ? (
              <button
                type='button'
                className='btn btn-outline-warning active'
                onClick={() => removeFavorite(props.element)}
              >
                ♥
              </button>
            ) : (
              <button
                type='button'
                className='btn btn-outline-warning '
                onClick={() => addFavorite(props.element)}
              >
                ♥
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
