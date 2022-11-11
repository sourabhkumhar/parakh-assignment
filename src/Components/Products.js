import React, { useContext } from 'react'
import Item from './Item'
import cartContext from '../context/cart/cartContext';

export default function Products(props) {
  const context = useContext(cartContext);
  const { totalPrice } = context;

  const { products, category } = props;

  return (
    <div className='products'>
      <button onClick={() => console.log(totalPrice())}>Total Price</button>
      {
        products.map((element, index) => {
          return <Item key={element.id} name={element.name} price={element.price} category={category} code={element.id} />
        })
      }
    </div>
  )
}
