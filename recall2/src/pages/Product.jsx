import ProductList from "../components/product/ProductList"
import { productData } from "../constant/productData"


const Products = () => {
    const products = productData
    console.log(products[0])
  return (
    <>
   
   <div className="grid grid-cols-4 pt-8 px-10"><ProductList products={products}/></div>
    </>
  )
}

export default Products