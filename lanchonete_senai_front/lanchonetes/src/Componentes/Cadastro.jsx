import React from "react";
import axios from "axios";


class Cadastro extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", username: "", password: "" , redirect: "/"};
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleCadastro = this.handleCadastro.bind(this);
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  handleUserChange(e) {
    this.setState({ username: e.target.value });
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleCadastro(e) {
    e.preventDefault();
    let config = {
      headers: {'Accept': 'text/html; q=1.0, /'}
    };
    let url = "http://localhost:8000/api/autenticacao/"
    // NOTE request to api Cadastro here instead of this fake promise
    let dados = JSON.stringify({nome: this.state.username, email: this.state.email, senha: this.state.password})
    axios.post(url, {data: dados}, config)
    .then( () => {
      this.props.history.push("/");      
    })
    .catch(error => {
      alert('Usuário ou senha inválidos');
      console.log(error)
    })
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-3 mt-5">
        <h2 className="text-center my-5">SENAI LANCHES</h2>
          <form onSubmit={this.handleCadastro} method="POST">
          <div className="form-group">
              <label htmlFor="exampleInputEmail2">E-mail</label>
              <input
                required
                type="email"
                className="form-control"
                name="email"
                value={this.state.email}
                onChange={this.handleEmailChange}
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
              />
              {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Username</label>
              <input
                required
                className="form-control"
                name="username"
                value={this.state.username}
                onChange={this.handleUserChange}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                required
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="row">
              <div className="col-6">
                <a className="btn btn-primary" role="button" href="/">
                  Voltar
                </a>    
              </div>
              <div className="col text-right">
                <button type="submit" className="btn btn-primary">
                  Cadastrar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Cadastro;
