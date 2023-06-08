import React from 'react'
import "./Products.css"
import { useStateValue } from './StateProvider'

function Products({ id,title, image, price, rating }) {
    const [{cart , user},dispatch] = useStateValue();
    
    console.log("this is the cart >>>>" , cart);

    const addToCart = () => {
        //dispatch the item into the data layer
        if(!user){
            alert('First you have to Sign-In to add items in the cart');
        }else{
            dispatch({
                type: 'ADD_TO_CART',
                item: {
                    id: id,
                    title: title,
                    image: image,
                    price: price,
                    rating: rating,
                },
            })

        }
    }

  return (
    <div className='product'>
        <div className='product_info'>
            <p>{title}</p>
            <p className='product_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product_rating'>
                {Array(rating).fill().map((_, i) => (<p>🌟</p>))}
            </div>
        </div>
        <img src={image} alt=''/>
        <button onClick={addToCart}>Add to cart</button>
    </div>
  )
}

export default Products
