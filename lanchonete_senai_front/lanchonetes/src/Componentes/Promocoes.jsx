import React, { Component } from "react";
import axios from "axios";
import CardPromocao from "./CardPromocao";

class Promocoes extends Component {
  constructor() {
    super();

    // endereço da API
    this.urlAPI = "http://localhost:8000/api/";
    this.state = {
      promocoes: [],
      produtos: [],
    };
    this.style = {
      corNomeOrigemNoticia: "#8DB5E9",
    };
  }

  // método principal que faz a chamada na API e define o estado das notícias
  definirPromocoes() {
    // let url = this.urlAPI + 'artigos/?categoria=' + this.props.categoriaAtiva
    let url = this.urlAPI + "promocoes";

    axios
      .get(url, { auth: { username: "admin", password: "testando.sempre" } })
      .then((response) => {
        this.setState({ promocoes: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // método chamado quando o componente termina de atualizar (clique no link)
  componentDidUpdate(prevProps) {
    if (prevProps.categoriaAtiva !== this.props.categoriaAtiva) {
      this.definirPromocoes();
    }
  }
  // método chamado no carregamento da página (refresh)
  componentDidMount() {
    this.definirPromocoes();
  }
  render() {
    if (this.state.promocoes.length) {
      return (
        <div className="row mb-2">
          {this.state.promocoes.map((promocao, i) => (
            // <CardPromocao key={i} id={promocao.id} imagem={promocao.imagem} categoria={promocao.categoria} nome={promocao.nome} descricao={promocao.descricao}></CardPromocao>
            <CardPromocao
              key={i}
              id={promocao.id}
              produto={promocao.produto.nome}
              preco={promocao.preco}
              imagem={promocao.produto.imagem}
              categoria={promocao.produto.categoria}
              nome={promocao.produto.nome}
              descricao={promocao.produto.descricao}
              loja_nome={promocao.loja.nome}
              loja_cidade={promocao.loja.cidade}
              loja_uf={promocao.loja.uf}
              loja_email={promocao.loja.email}
            ></CardPromocao>
          ))}
        </div>
      );
    } else {
      // return (<div>Não há notícias nessa categoria.</div>);
      return <div>Não há promocoes</div>;
    }
  }
}

export default Promocoes;
