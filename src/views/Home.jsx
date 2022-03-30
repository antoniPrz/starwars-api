/* eslint-disable */


import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../store/appContext';
import './Home.css';

export default function Home() {
  // const { name } = useParams();

  const [fav, setFav] = useState(true);

  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPeople();
  }, []);

  useEffect(() => {
    actions.getPlanets();
  }, []);

  useEffect(() => {
    actions.getVehicles();
  }, []);

  // store.swPlanets.forEach(element => {
  //   console.log(element.name)
  //   console.log(element.population)
  // });

  const planeta = store.swPlanets.map((element) => element);
  const people = store.swPeople.map((e) => e);
  const vehicles = store.swVehicles.map((e) => e);

  // eslint-disable-next-line no-console
  console.log(vehicles);


  const addFavorite = () => {



    setFav(!fav)
    fav == false ? console.log("desactivado") : actions.addFavorites(list)
  }


  return (
    <>
      <h1>Planets</h1>
      <div className=" container tarjeta">
        {planeta.map((e, index) => (
          <div className="card-deck carta ">
            <div className="card mr-4 " key={index}>
              <img
                src="https://valenciaplaza.com/public/Image/2020/9/planeta_NoticiaAmpliada.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{e.name}</h5>
                <p className="card-text">
                  <b>rotation period:</b>
                  {' '}
                  {e.rotation_period}
                  {' '}
                  <br />
                  <b>Diameter: </b>
                  {e.diameter}
                  {' '}
                  <br />
                  <b>Population: </b>
                  {e.population}
                  {' '}
                  <br />

                </p>

                <Link to={`/planeta/${index + 1}`} className="btn btn-primary">
                  Details
                </Link>
                <a href="#!" className="btn btn-outline-warning">♥</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h1>People</h1>
      <div className=" container tarjeta  ">
        {people.map((e, index) => (
          <div className="card-deck carta ">

            <div className="card mr-4 " key={index}>
              <img
                src="https://cdn1-www.comingsoon.net/assets/uploads/2015/06/StarWarsRebels.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{e.name}</h5>
                <p className="card-text">
                  <b>Mass: </b>
                  {' '}
                  {e.mass}
                  {' '}
                  <br />
                  <b>Hair color: </b>
                  {' '}
                  {e.hair_color}
                  <br />
                  <b>Gender: </b>
                  {' '}
                  {e.gender}

                </p>

                <Link to={`/people/${index + 1}`} className="btn btn-primary">
                  Details
                </Link>
                <a href="#!" className="btn btn-outline-warning">♥</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h1>Vehicles</h1>
      <div className=" container tarjeta  ">
        {vehicles.map((e, index) => (
          <div className="card-deck carta ">
            <div className="card mr-4 " key={index}>
              <img
                src="https://i.ytimg.com/vi/ncTRcjIzCyw/hqdefault.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{e.name}</h5>
                <p className="card-text">
                  <b>Model: </b>
                  {e.model}
                  {' '}
                  <br />
                  <b>Manufacturer: </b>
                  {e.manufacturer}
                  {' '}
                  <br />
                  <b>Passengers: </b>
                  {e.passengers}
                  {' '}
                  <br />
                </p>

                <Link to={`/vehicles/${index + 1}`} className="btn btn-primary">
                  Details
                </Link>



                <button

                  type="button"
                  className="btn btn-outline-warning"
                  onClick={() => addFavorite()}


                >♥</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
