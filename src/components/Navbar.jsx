/* eslint-disable */

import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Navbar() {
  return (
    <div className=" d-flex justify-content-around align-items-center">

      <nav className="navbar navbar-light bg-light">
        <Link className="navbar-brand" href="#!" to="/">StarWars</Link>
      </nav>



      <div class="btn-group">
        <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Fav list
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
          <li><button class="dropdown-item" type="button">Action</button></li>
          <li><button class="dropdown-item" type="button">Another action</button></li>
          <li><button class="dropdown-item" type="button">Something else here</button></li>
        </ul>
      </div>

    </div>
  );
}
