import React from "react";
import axios from "axios";


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" , redirect: "/principal"};
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleEmailChange(e) {
    this.setState({ username: e.target.value });
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleLogin(e) {
    e.preventDefault();
    let url = "http://localhost:8000/api/autenticacao/"
    // NOTE request to api login here instead of this fake promise
    axios.get(url, {params: {nome: this.state.username, senha: this.state.password}})
    .then( () => {
      this.props.history.push("/principal");      
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
          <form onSubmit={this.handleLogin}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Username</label>
              <input
                className="form-control"
                name="username"
                value={this.state.username}
                onChange={this.handleEmailChange}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            {/* <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
              <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div> */}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
