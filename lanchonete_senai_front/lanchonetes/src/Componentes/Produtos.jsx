import React, { Component } from 'react';
import axios from 'axios';
import CardProduto from './CardProduto';

class Produtos extends Component {
    constructor(){
		super();
		
		// endereço da API
		this.urlAPI = 'http://localhost:8000/api/';
        this.state = {
            produtos: []
        }
        this.style = {
            corNomeOrigemNoticia: "#8DB5E9"
        }
    }

	// método principal que faz a chamada na API e define o estado das notícias
    definirNoticias(){
        // let url = this.urlAPI + 'artigos/?categoria=' + this.props.categoriaAtiva
        let url = this.urlAPI + 'produtos'
        console.log(url)
        axios.get(url, {auth: {username: 'admin', password: 'testando.sempre'}})
		.then(response => {
			this.setState({ produtos: response.data });
		})
		.catch(error => {
			console.log(error)
		})
    }	
	// método chamado quando o componente termina de atualizar (clique no link)
    componentDidUpdate(prevProps) {
        if(prevProps.categoriaAtiva !== this.props.categoriaAtiva){
            this.definirNoticias();
        }
	}
	// método chamado no carregamento da página (refresh)
    componentDidMount() {
        this.definirNoticias();
    }
    render() {
        console.log(this.state.produtos);
        if(this.state.produtos.length){
			return (<div className="row mb-2">
				{this.state.produtos.map((produto, i) => (
					<CardProduto key={i} imagem={produto.imagem} categoria={produto.categoria} nome={produto.nome} descricao={produto.descricao}></CardProduto>
				))}
				</div>);
        }else{
            // return (<div>Não há notícias nessa categoria.</div>);
            return (<div>Não há produtos</div>);
        }
    }

}

export default Produtos;