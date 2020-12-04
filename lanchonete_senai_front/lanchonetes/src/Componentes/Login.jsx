import React, { Component } from 'react';
import axios from 'axios';

// function renderForm() {
//   return (
//     <div className="row justify-content-center align-items-center">
//       <div className="col-3">
//         <form action="/principal" method={this.enviarForm}>
//           <div className="form-group">
//             <label for="exampleInputEmail1">Email address</label>
//             <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
//             <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
//           </div>
//           <div className="form-group">
//             <label for="exampleInputPassword1">Password</label>
//             <input type="password" className="form-control" id="exampleInputPassword1"></input>
//           </div>
//           <div className="form-group form-check">
//             <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
//             <label className="form-check-label" for="exampleCheck1">Check me out</label>
//           </div>
//           <button type="submit" className="btn btn-primary">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// }

const LoginHandler = ({ history }) => {
  const username = "";
  const senha = "";
  let url = 'http://localhost:8000/api/autenticacao';
  const handleSubmit = async e => {
    e.preventDefault();
    
    // NOTE request to api login here instead of this fake promise
    axios.get(url, {nome: username, senha: senha})
    .then(response => {
			this.setState({ produtos: response.data });
		})
		.catch(error => {
			console.log(error)
		})
    
  };

  return (
    <div className="row justify-content-center align-items-center">
      <div className="col-3">
        <form action="/principal" method={this.enviarForm}>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"></input>
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );

}

export default LoginHandler;
