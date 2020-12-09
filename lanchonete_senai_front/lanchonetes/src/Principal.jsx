import React from 'react';
import Header from './Componentes/Header'
import FilterMenu from './Componentes/FilterMenu'
import Produtos from './Componentes/Produtos'
import Promocoes from './Componentes/Promocoes'


function Principal(props) {
	console.log(props);
	// Categorias a serem apresentadas no menu
	const categorias = [
		{'url': 'lojas', 'nome': 'Lojas'}, 
		{'url': 'produtos', 'nome': 'Promocoes'},
	];
	// define a variável categoria ativa
	let categoriaAtiva;
	
	// checa se a categoria da url é diferente de undefined, 
	// se for a define como a categoria ativa
	if(typeof props.match.params.categoria !== 'undefined'){
		categoriaAtiva = props.match.params.categoria;
	} else {
		categoriaAtiva = 'geral';
	}
	console.log(props.match.params.categoria);
	console.log(categoriaAtiva);
	return (
		<div className="container-fluid">
			<Header titulo={'SENAI LANCHES'} logo={'/logo192.png'} />
			<FilterMenu categorias={categorias} categoriaAtiva={categoriaAtiva}></FilterMenu>
			{/* <Produtos categoriaAtiva={categoriaAtiva}></Produtos> */}
			<Promocoes categoriaAtiva={categoriaAtiva}></Promocoes>
		</div>
	);
}

export default Principal;
