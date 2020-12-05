import React from "react";

function CardPromocao(props) {
  return (
    <div className="col-md-4">
      <div className="card flex-md-row mb-4 shadow-sm h-md-200">
        <div className="card-body d-flex flex-column align-items-start">
          <div className="row mb-3">
            <div className="col">
              <img
                src={props.imagem}
                alt="Imagem do produto"
                className="img mb-2"
              />
            </div>
            <div className="col">
              <h4 className="mb-0">{props.produto}</h4>
              <span className="font-weight-bold my-2">R$ {props.preco}</span>
            </div>
          </div>
          <div className="row">
            <div className="col mb-2">
              <button
                className="btn btn-primary"
                data-toggle="collapse"
                data-target={"#descricaoProduto" + props.id}
                aria-expanded="false"
                aria-controls="descricaoProduto"
              >
                Ver Mais
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="collapse" id={"descricaoProduto" + props.id}>
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <p>{props.produto}</p>
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col">
                      <p>Peça já no {props.loja_nome} ou através do e-mail {props.loja_email}</p>
                      <p>{props.loja_cidade}/{props.loja_uf}</p>
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col">
                      <small>Categoria: {props.produto}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPromocao;
