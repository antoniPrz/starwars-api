import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from './views/Details';
import Home from './views/Home'

export default function App() {
  return (
    <Router>
			
			<Switch>
				<Route exact path="/details">
					<Details />
				</Route>
				<Route exact path="/">
					<Home />
				</Route>
				<Route render={() => <h1>Not found</h1>} />
			</Switch>
		</Router>
  )
}
