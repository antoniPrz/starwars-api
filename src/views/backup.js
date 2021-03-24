import React,{useEffect ,useContext,useState } from 'react'
import {Context} from '../store/appContext'
import {useParams} from 'react-router-dom'

export default function People() {

  const { index } = useParams();
  // console.log(index);
  // const { store, actions } = useContext(Context);

const [people, setPeople] = useState([])


  useEffect(() => {
  
    fetch(`https://swapi.dev/api/people/${index}`)
    .then(r => r.json())
    .then(data => setPeople(data))
    .catch(error => console.log(error))
  }, []);
    console.log(people);

  // const dplaneta = planeta.map((element) => element);
  // console.log(planeta);




    return ( 
        <div className= "container">
      <div className="card mb-3" >
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src="https://cdn1-www.comingsoon.net/assets/uploads/2015/06/StarWarsRebels.png" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{people.name}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}
