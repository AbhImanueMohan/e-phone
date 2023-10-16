import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import "./Cart.css"
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";



const Cart = ({ cart, setCart}) => {
// increase qty
const incqty =(product) =>{
    const exsit = cart.find((x)=>{
        return  x.id === product.id
    })
    setCart(cart.map((curElm)=>{
        return curElm.id === product.id ? { ...exsit, qty: exsit.qty + 1}:curElm
    }))
}
//  decrease qty
const decqty =(product) =>{
    const exsit = cart.find((x)=>{
        return  x.id === product.id
    })
    setCart(cart.map((curElm)=>{
        return curElm.id === product.id ? { ...exsit, qty: exsit.qty - 1}:curElm
    }))
}

// remove product from cart
const removeproduct = (product)=>{
    const exsit = cart.find((x)=>{
        return x.id === product.id
    })
    if(exsit.qty > 0){
        setCart(cart.filter((x)=>{
            return x.id !== product.id
        }))
    }
}
// Grand total
const Totalprice = cart.reduce((price, item )=> price + item.qty * item.Price, 0)
  return (
    <>
    <div className="cartcontainer">
        {
            cart.length === 0 && 
            <div className="emptycart">
                <h2 className='empty'> Your cart is Empty</h2>
                <Link to='/product' className='emptycartbtn'> Shop More</Link>
            </div>
        }
        <div className="contant">

            {
                cart.map((curElm)=>{
                    return(
                    <div className="cart_item" key={curElm.id}>
                                <button className='closebtn' onClick={()=> removeproduct(curElm)}><AiOutlineCloseCircle/></button>
                        <div className="img_box">
                            <img width={300} height={300} src={curElm.Img} alt={curElm.Title}/>
                        </div>
                        <div className="detail">
                            <div className="info">
                            <h4>{curElm.Cat}</h4>
                            <h3>{curElm.Title}</h3>
                            <p>Price : Rs{curElm.Price}</p>
                            <div className="qty">
                                <button className='incqty' onClick={()=> incqty(curElm)}>+</button>
                                <input type="text" value={curElm.qty} />
                                <button className='decqty' onClick={()=> decqty(curElm)}>-</button>
                                </div>
                            <h4 className='subtotal'>Sub Total : Rs {curElm.Price *curElm.qty}</h4>
                            </div>
                        </div>
                        </div>
                    )
                })
            }
          
        </div>
        {
            cart.length > 0 && 
            <>
               <h2 className='totalprice'> Grand Total : Rs{Totalprice}</h2>
               <button className='checkout'>Checkout</button>
            </>
        }
    </div>
    </>
  )
}

export default Cart