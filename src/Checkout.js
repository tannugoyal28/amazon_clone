import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider';

function Checkout() {
    const[{cart , user} , dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img className='checkout_ad' src='https://themoneyninja.com/wp-content/uploads/2020/09/Amazon-Discover-50-Off-150-Purchase-Banner.jpg' alt=''/>
            <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className='checkout_title'>Your shopping cart</h2>
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
        <div className='checkout_right'>
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout
