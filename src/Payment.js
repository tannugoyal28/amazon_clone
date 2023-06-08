import React, { useEffect } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'; 
import CheckoutProduct from './CheckoutProduct';
import { Link , useHistory} from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from './reducer';
import axios from './axios';
import { db } from './Firebase';


function Payment() {
    const[{cart,user},dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();
    
    const [succeeded, setSucceeded] = useState(false);
    const [processing,setProcessing] = useState('');

    const [error,setError] = useState(null);
    const [disabled,setDisabled] = useState(true);

    const [clientSecret, setClientSecret] = useState(true);

    useEffect(()=>{
        const getClientSecret = async ()=>{
            const res = await axios({
                method: 'post',
                url: `/payments/create?total=${getCartTotal(cart) * 100}`
            });
            setClientSecret(res.data.clientSecret)
        }
        getClientSecret();
    },[cart])

    console.log('THE SECRET IS >>>',clientSecret)

    const handleSubmit = async (e) =>{
        console.log("1");
        e.preventDefault();
        setProcessing(true);

        console.log("2");
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{

            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                cart: cart,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type:'EMPTY_CART'
            })

            history.replace('/orders')
        })
    }

    const handleChange = e =>{
        setDisabled(e.empty);
        setError(e.error ? e.error.message : '');
    }

  return (
    <div className='payment'>
      <div className='payment_container'>
        <h1>Checkout (<Link to='/checkout'>{cart?.length} items</Link>)</h1>
        <div className='payment_section'>

        </div>
        <div className='payment_section'>
            <div className='payment_title'>
                <h3>Delivery Address</h3>
            </div>
            <div className='payment_address'>
                <p>{user?.email}</p>
                <p>123 React Lane</p>
                <p>Los Angles, CA</p>
            </div>
        </div>
        <div className='payment_section'>
            <div className='payment_title'>
                <h3>Review items and delivery</h3>
            </div>
            <div className='payment_items'>
                {cart.map(item=>(
                    <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
            </div>
        </div>
        <div className='payment_section'>
            <div className='payment_title'>
                <h3>Payment Method</h3>
            </div>
            <div className='payment_details'>
                <form onSubmit={handleSubmit}>
                    <CardElement onChange={handleChange}/>

                    <div class='payment_priceContainer'>
                        <CurrencyFormat
                        renderText={(value) => (
                            <h3 className='order_total'>Order Total: {value}</h3>
                        )}
                        decimalScale={2}
                        value={getCartTotal(cart)}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                        />
                        <button disabled={processing || disabled || succeeded}>
                            <span>{processing ? <p>Processing...</p> : <h3>Buy Now</h3>}</span>
                        </button>
                    </div>
                    {error && <div>{error}</div>}
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
