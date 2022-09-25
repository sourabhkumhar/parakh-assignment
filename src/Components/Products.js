import React from 'react'
import Item from './Item'

export default function Products(props) {
    const {products, category} = props;
    
  return (
    <div className='products'>
        {
            products.map((element, index) => {
                return <Item key={element.name} name={element.name} price={element.price} category={category} code={index} />
            })    
        }
    </div>
  )
}
