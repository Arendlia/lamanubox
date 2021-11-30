import React from 'react';

function Box(props) {
    const {cartItems, onAdd, onRemove, Addm2, Removem2, Addh, Removeh} = props;
    const itemsSurface = cartItems.reduce((a, c) => a + c.qty * c.surface, 0);
    const itemsVolume = cartItems.reduce((a, c) => a + c.qty * c.surface* c.high, 0);
    
    return (
      <>
      <div class="d-flex flex-column bd-highlight text-center mb-3">
      <h2>Le Box</h2>
      {cartItems.length === 0 && <div>Le box est vide</div>}
      {cartItems.map((item) => (
        <table className="table table-light table-hover m-0">
          <div key={item.id} className="row justify-content-center">
            <tr scope="col-md-2">
            <td>{item.name}</td>
            <td>
              <p><strong>Quantité :</strong> {item.qty} </p>
              <button className="btn btn-danger ms-2" onClick={() => onRemove(item)}>
                -
              </button>
              <button className="btn btn-primary ms-2" onClick={() => onAdd(item)} >
                +
              </button>
            </td>
            <td>
            <p><strong>Surface : </strong>{item.qty}x{item.surface}m2</p>
              <button className="btn btn-danger ms-2" onClick={() => Removem2(item)}>
                -
              </button>
              <button className="btn btn-primary ms-2" onClick={() => Addm2(item)} >
                +
              </button>
              
            </td>
            
            <td>
              <p><strong>Hauteur : </strong>{item.qty}x{item.high}m </p>
              <button className="btn btn-danger ms-2" onClick={() => Removeh(item)}>
                -
              </button>
              <button className="btn btn-primary ms-2" onClick={() => Addh(item)} >
                +
              </button>
            </td>
            
            
          </tr>
          </div>
          </table>
        ))}
        {cartItems.length !== 0 && (
        <div className="row">
              <div className="col-1">
                <strong>Volume total</strong>
              </div>
              <div className="col-1 text-right">
              <p><strong>Surface Totale</strong>{itemsSurface}m2</p>
              <div className="col-1 text-right">
              <p><strong>Volume Total</strong>{itemsVolume}m3</p>
              </div>
                {itemsSurface < 3 && <p>Box S</p>}
                {itemsSurface >= 3 & itemsSurface < 6  && <p>Box M</p>}
                {itemsSurface > 6 & itemsSurface < 10 && <p>Box L</p>}
                {itemsSurface > 10 & itemsSurface < 16 && <p>Box XL</p>}
                {itemsSurface > 16 && <p>Pas de box assez grand</p>}
              </div>
            </div>
        )}
        </div>
      </>
    );
  }
  export default Box;