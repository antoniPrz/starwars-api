import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Navbar() {
  return (
    <div>

      <nav className="navbar navbar-light bg-light">
        <Link className="navbar-brand" href="#!" to="/">StarWars</Link>
      </nav>

      <div className=" favoritos">

        <button type="button" className="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          Fav list
        </button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#!">Fav list</a>

          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#!">Separated link</a>
        </div>

      </div>

    </div>
  );
}
