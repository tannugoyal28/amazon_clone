import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getCartTotal } from './reducer';
import { useHistory } from 'react-router-dom';


function Subtotal() {
    const history = useHistory();
    const [{cart , user}, dispatch] = useStateValue();
  return(
    <div className='subtotal'>
        <CurrencyFormat
        renderText={(value)=>(
            <>
            <h3>Hello, {user?.email}</h3>
            <p>
                Subtotal ({cart.length} items):
                <strong>{value}</strong>
            </p>
            <small className='subtotal_gift'>
                <input type='checkbox'/>This order contains a gift
            </small>
            </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        />
        <button onClick={e => history.push('/payment')}>Proceed to checkout</button>
        </div>
  )
}

export default Subtotal
