import React from 'react'
import Button from '../common/Button'

const ProductCard = ({product}) => {
  return (
    <>
    <div className='border border-gray-800 bg-gray-800 px-2 py-2 rounded-lg'>

        <img src={product.img} alt="" className='rounded-lg' />

        <p className='text-white'>${product.price}</p>
       <h2 className='font-extrabold text-amber-50'>{product.name}</h2>
       <p className='text-white'>{product.brand}</p>
     <Button text="Buy now" color="text-blue-200 bg-gray-800 hover:text-white" />

    </div>
    
    </>
  )
}

export default ProductCard