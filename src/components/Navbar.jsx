/* eslint-disable */

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Context } from '../store/appContext';

export default function Navbar() {
  const { store, actions } = useContext(Context);
  const { favoritesList } = store;
  const { removeFavorite } = actions;

  return (
    <div className=' d-flex justify-content-around align-items-center fixed-top bg-dark mb-5'>
      <nav className='navbar navbar-light bg-light'>
        <Link className='navbar-brand' href='#!' to='/'>
          StarWars
        </Link>
      </nav>

      <div className='btn-group'>
        <button
          type='button'
          className='btn btn-warning dropdown-toggle'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          {`Favorites ${favoritesList.length}`}
        </button>
        <ul className='dropdown-menu dropdown-menu-end flex-column justify-content-between'>
          {favoritesList.map((element, index) => (
            <li
              className='dropdown-item d-flex justify-content-between align-items-center'
              type='button'
              key={index}
            >
              {element.name}
              <button className='btn' onClick={() => removeFavorite(element)}>
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
