import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Principal from './Principal.jsx'
import Login from './Componentes/Login';
import Cadastro from './Componentes/Cadastro';


import './App.css';

function App() {
	return (
		<Router>
			<div>
				<Route path="/categoria/:categoria" component={Principal}></Route>
				<Route path="/principal" component={Principal}></Route>
				<Route path="/cadastro" component={Cadastro}></Route>
				<Route path="/" exact component={Login}></Route>
			</div>
		</Router>
	);
}

export default App;
