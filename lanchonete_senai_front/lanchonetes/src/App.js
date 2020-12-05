import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Principal from './Principal.jsx'
import Login from './Componentes/Login';


import './App.css';

function App() {
	return (
		<Router>
			<div>
				<Route path="/categoria/:categoria" component={Principal}></Route>
				<Route path="/" exact component={Principal}></Route>
				{/* <Route path="/" component={Login}></Route> */}
			</div>
		</Router>
	);
}

export default App;
