import React, { useState } from 'react'
import Nav from "./components/Nav"
import Rout from "./Rout"
import Root from "./components/Root"
import ProductsDetails from './ProductsDetails'
import { BrowserRouter } from 'react-router-dom'


const App = () => {
  // Add to cart
  const [cart, setCart] = useState([])
  // Product Details
  const [close, setClose] = useState(false)
  const [detail, setDetail] = useState([])
  // Filter Product
  const [product, setProduct]=useState(ProductsDetails)
  const searchbtn = (product) =>{
    const change = ProductsDetails.filter((x)=>{
      return x.Cat === product
    })
    setProduct(change)
  }
  // product detail
  const view = (product)=>{
    setDetail([{...product}])
    setClose(true)
  }

  //  add to cart 
  

  const addtocart =(product)=>{
    const exsit = cart.find((x)=>{
      return x.id === product.id
    })
    if(exsit){
      alert("Product Already Inside Cart")
    }
    else{
      setCart([...cart, {...product, qty:1}])
      alert("Product Added to the Cart")
    }
  }
  console.log(cart);

  return (
    <>
    <BrowserRouter>
    <Nav searchbtn={searchbtn}/>
    <Rout product={product} setProduct={setProduct} detail={detail} view ={view} close={close} setClose={setClose} cart = {cart} setCart={setCart} addtocart={addtocart}/>
    <Root/>
    </BrowserRouter>
    </>
  )
}

export default App