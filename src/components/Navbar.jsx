/* eslint-disable */

import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Context } from '../store/appContext';

export default function Navbar() {
  const { store, actions } = useContext(Context);

  const { favoritesList } = store;

  // const { deleteFavorite } = actions;

  const delFavorite = (element) => {
    actions.deleteFavorite(element);
  };

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
          Fav list
        </button>
        <ul class='dropdown-menu dropdown-menu-end'>
          {store.favoritesList.map((element) => (
            <li class='dropdown-item' type='button'>
              {element.name}
              <button onClick={() => delFavorite(element)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
