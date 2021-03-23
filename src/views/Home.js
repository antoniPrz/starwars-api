import React, {useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {Context} from '../store/appContext';

export default function Home() {
 
  const {name} = useParams();
  const {store , actions } = useContext(Context);

    useEffect(() => {
        fetch("https://swapi.dev/api/people/")
        .then(r => r.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
      },[])

      useEffect(() => { 
       actions.getPlanets();
        
      },[])

      // store.swPlanets.forEach(element => {
      //   console.log(element.name)
      //   console.log(element.population)
      // });

       const planetaNames = store.swPlanets.map(element =>  element.name );
     
       console.log(planetaNames);

      useEffect(() => {
        fetch("https://swapi.dev/api/vehicles/")
        .then(r => r.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
      },[])







    return (
        <div className = 'container'>
            <div className="card-deck">
  <div className="card">
    <img src="https://picsum.photos/id/1/400/200" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    
      <Link to='/details' className="btn btn-primary">Details</Link>
    </div>
  </div>
  <div className="card">
    <img src="https://picsum.photos/id/1/400/200" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      
      <Link to='/details' className="btn btn-primary">Details</Link>
    </div>
  </div>
  <div className="card">
    <img src="https://picsum.photos/id/1/400/200" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      
      <Link to='/details' className="btn btn-primary">Details</Link>
    </div>

    {planetaNames.map(e => 
      
       <h1>{e}</h1>
      
      )}
    
  </div>
 
  
 
  
  
  
  
  
</div>
        </div>
    )
}
