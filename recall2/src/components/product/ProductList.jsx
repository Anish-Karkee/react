import ProductCard from './ProductCard'

const ProductList = ({products}) => {
  return (
   <>
   
    {
        products.map((product)=>(
            <div className=' tex-2xl m-5 pr-8'>
                <ProductCard product={product}/>
            </div>
        ))
    }
   
   </>
  )
}

export default ProductList