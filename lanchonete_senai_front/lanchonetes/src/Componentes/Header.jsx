import React from "react";

function Header(props) {
  return (
    <header className="blog-header">
      <nav className="navbar navbar-dark bg-dark">
        <div className="col-2">
        <a className="blog-header-logo" href="/">
          <img src={props.logo} height="40px" alt="Logo" />
        </a>
        </div>
        <div className="col-4 text-center text-white">
          {props.titulo}
        </div>
        <div className="col-4"></div>
      </nav>
    </header>
  );
}

export default Header;
