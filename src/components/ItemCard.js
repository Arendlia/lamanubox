import React from 'react';

function ItemCard(props) {
    const { product, onAdd } = props;
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100 shadow">
        <img src={product.img} class="card-img-top" img-fluid alt="Ajouter un objet"/>
        <div className="card-body">
            <h5 class="card-title">{product.title}</h5>
            <p class="card-text">{product.desc}</p>
            <button className="btn btn-primary"  onClick={() => onAdd(product)}>Ajouter au box</button>
            </div>
    </div>
    </div>
  );
}

export default ItemCard;