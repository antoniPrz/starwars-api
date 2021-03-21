import React, {useEffect} from 'react'
import {Link} from 'react-router-dom';



export default function Home() {



    useEffect(() => {
        fetch("https://swapi.dev/api/people/")
        .then(r => r.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
      },[])

    return (
        <div className = 'container'>
            <div class="card-deck">
  <div class="card">
    <img src="https://picsum.photos/id/1/400/200" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      <Link to='/details' class="btn btn-primary">Details</Link>
    </div>
  </div>
  <div class="card">
    <img src="https://picsum.photos/id/1/400/200" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      <Link to='/details' class="btn btn-primary">Details</Link>
    </div>
  </div>
  <div class="card">
    <img src="https://picsum.photos/id/1/400/200" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      <Link to='/details' class="btn btn-primary">Details</Link>
    </div>
  </div>
 
  
 
  
  
  
  
  
</div>
        </div>
    )
}
