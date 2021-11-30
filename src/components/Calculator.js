import React from 'react';
import ItemCard from './ItemCard';


function Calculator(props) {
    const { products, onAdd } = props;
  return (
    <>
      <h1 className="text-center mt-3">Nouvel objet</h1>
      <section className="py-4 container">
            <div className="row justify-content-center">
            {products.map((product) => (
          <ItemCard key={product.id} product={product} onAdd={onAdd}></ItemCard>
        ))}
                      </div>
      </section>
    </>
  );
}

export default Calculator;