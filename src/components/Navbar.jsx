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
    <div className=' d-flex justify-content-around align-items-center'>
      <nav className='navbar navbar-light bg-light'>
        <Link className='navbar-brand' href='#!' to='/'>
          StarWars
        </Link>
      </nav>

      <div class='btn-group'>
        <button
          type='button'
          class='btn btn-warning dropdown-toggle'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          Favorites
        </button>
        <ul class='dropdown-menu dropdown-menu-end'>
          {favoritesList.map((element) => (
            <li class='dropdown-item' type='button'>
              {element.name}
              <button onClick={() => removeFavorite(element)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
