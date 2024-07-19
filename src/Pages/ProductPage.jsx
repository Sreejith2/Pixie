import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Product from '../Components/Product'
import ProductNav from '../Components/ProductNav'

function ProductPage() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
        <ProductNav/>
        <Product/>
    </div>
  )
}

export default ProductPage