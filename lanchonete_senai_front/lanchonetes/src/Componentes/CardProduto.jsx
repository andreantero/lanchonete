import React from 'react';

function CardProduto(props) {
	return (		
		<div className="col-md-4">
			<div className="card flex-md-row mb-4 shadow-sm h-md-200">
				<img src="" alt="Imagem do produto" className="card-img-top h-25 w-25"/>
				<div className="card-body d-flex flex-column align-items-start">
					<strong className="d-inline-block mb-2">{props.categoria}</strong>
					<h4 className="mb-0">
						{props.nome}
					</h4>
					<button className="btn btn-primary" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
						Ver Mais
					</button>
					<div className="collapse" id="collapseExample">
						<div className="card card-body">
							<p>{props.descricao}</p>
							<small>Categoria: {props.categoria}</small>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CardProduto;