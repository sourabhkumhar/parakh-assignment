import React, { useContext, useState } from 'react';
import cartContext from '../context/cart/cartContext'

const Item =(props) => {
    const context = useContext(cartContext);
    const { addToCart, removeFromCart } = context;
    const [qty, setQty] = useState(0);
    const { code, name, price, category } = props;

    const incQty = () => {
        setQty(qty+1)
    }

    const decQty = () => {
        setQty(qty-1)
    }

    return (
        <div className='box'>
            <div className="details">
                <span className='box-item title name'>Name: {name}</span>
                <span className='box-item title price'>Price: {price}</span>
            </div>

            <div className="qty button">
                <button disabled={qty===0} onClick={decQty} className='qtyBtn removeQty'>-</button>
                <span className='qtyShow'>{qty}</span>
                <button onClick={incQty} className='qtyBtn addQty'>+</button>
            </div>

            <div className="button">
                <button disabled={qty===0} onClick={() => { addToCart(code, name, price, category, qty) }} className='box-item btn add'>Add To the Cart</button>
                <button onClick={() => { removeFromCart(code, category) }} className='box-item btn remove'>Remove from Cart</button>
            </div>
        </div>
    )
}

export default Item;