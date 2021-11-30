import React from 'react';

function Box(props) {
    const {cartItems, onAdd, onRemove, Addm2, Removem2, Addh, Removeh} = props;
    const itemsSurface = cartItems.reduce((a, c) => a + c.qty * c.surface, 0);
    const itemsVolume = cartItems.reduce((a, c) => a + c.qty * c.surface* c.high, 0);
    return (
      <>
      <h2>Le Box</h2>
      {cartItems.length === 0 && <div>Le box est vide</div>}
      {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button className="remove" onClick={() => onRemove(item)}>
                -
              </button>
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>
            <div className="col-2">
              <button className="remove" onClick={() => Removem2(item)}>
                -
              </button>
              <button onClick={() => Addm2(item)} className="add">
                +
              </button>
            </div>
            <div className="col-2">
              <button className="remove" onClick={() => Removeh(item)}>
                -
              </button>
              <button onClick={() => Addh(item)} className="add">
                +
              </button>
            </div>
            <div>{item.qty}x{item.surface}m2</div>
            <div>{item.qty}x{item.high}m de hauteur</div>
          </div>
        ))}
        {cartItems.length !== 0 && (
        <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
              <strong>{itemsSurface}m2</strong>
              <strong>{itemsVolume}m3</strong>
                {itemsSurface < 3 && <p>Box S</p>}
                {itemsSurface >= 3 & itemsSurface < 6  && <p>Box M</p>}
                {itemsSurface > 6 & itemsSurface < 10 && <p>Box L</p>}
                {itemsSurface > 10 & itemsSurface < 16 && <p>Box XL</p>}
                {itemsSurface > 16 && <p>Pas de box assez grand</p>}
              </div>
            </div>
        )}
      </>
    );
  }
  export default Box;