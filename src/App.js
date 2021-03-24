import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import injectContext from './store/appContext';
import Navbar from './components/Navbar';
import Planeta from './views/planeta';
import People from './views/people';
import Vehicles from './views/vehicles';
import Home from './views/Home'

 const  App = () => {
  return (
    <Router>
			<Navbar/>
			<Switch>
				
				<Route exact path="/people/:index">
					<People />
				</Route>
				<Route exact path="/vehicles/:index">
					<Vehicles/>
				</Route>
				<Route exact path="/planeta/:index">
					<Planeta />
				</Route>
				<Route exact path="/">
					<Home />
				</Route>
				<Route render={() => <h1>404 Not found</h1>} />
			</Switch>
		</Router>
  )
}


export default injectContext(App);