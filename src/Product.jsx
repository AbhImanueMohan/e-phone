import React from 'react';
import ProductsDetails from './ProductsDetails'; // Make sure to import your product data correctly
import { AiOutlineShoppingCart, AiFillEye, AiTwotoneHeart, AiOutlineCloseCircle } from 'react-icons/ai';
import { useAuth0 } from "@auth0/auth0-react";
import './Product.css';

const Product = ({product, setProduct, detail, view, close, setClose, addtocart}) => {

  const { loginWithRedirect, isAuthenticated } = useAuth0();


  const filterProducts = (category) => {
    const updatedProducts = ProductsDetails.filter((product) => {
      return product.Cat === category;
    });
    setProduct(updatedProducts);
  };

  const resetProducts = () => {
    setProduct(ProductsDetails);
  };

  return (
    <> 
    {
      close ?
      <div className="product_detail">
      <div className="container">
        <button onClick={()=> setClose(false)} className='closebtn'><AiOutlineCloseCircle/></button>
        {
          detail.map((curElm)=>{
            return(
              <div className="productbox">
                <div className="img-box">
                  <img width={250} height={250} src={curElm.Img} alt={curElm.Title}/>
                </div>
                <div className="detail">
                  <h4>{curElm.Cat}</h4>
                  <h2>{curElm.Title}</h2>
                  <p>A Screen Everyone Will Love : Whether your family is streaming or video chatting with tablet A8....</p>
                  <h3>{curElm.Price}</h3>
                  <button onClick={()=> addtocart (curElm)}>Add to Cart</button>
                </div>
              </div>
            )
          })
        }
       
      </div>
    </div> :null
    }
  
      <div className="products">
        <h2># Products</h2>
        <p>Home .products</p>
        <div className="container">
          <div className="filter">
            <div className="categories">
              <h3>Categories</h3>
              <ul>
                <li onClick={() => resetProducts()}>All</li>
                <li onClick={() => filterProducts("Tablet")}>Tablet</li>
                <li onClick={() => filterProducts("Smart Watch")}>Watches</li>
                <li onClick={() => filterProducts("mobile")}>mobile</li>
                <li onClick={() => filterProducts("CPU")}>CPU</li>
                <li onClick={() => filterProducts("PowerBank")}>PowerBank</li>
                <li onClick={() => filterProducts("HeadPhone")}>HeadPhone</li>
                <li onClick={() => filterProducts("Keyboard")}>Keyboard</li>
                <li onClick={() => filterProducts("Joystick")}>Joystick</li>
              </ul>
            </div>
          </div>
          <div className="productbox">
            <div className="contant">
              {product.map((curElm) => {
                return (
                  <div className="box" key={curElm.id}>
                    <div className="img_box">
                      <img width={200} height={200} src={curElm.Img} alt={curElm.Title} />
                      <div className="icon">
                        {
                          isAuthenticated ?
                          <li onClick={()=> addtocart(curElm)}><AiOutlineShoppingCart /></li>
                          :
                          <li onClick={()=> loginWithRedirect()}><AiOutlineShoppingCart /></li>
                        }
                        <li onClick={()=> view(curElm)}><AiFillEye /></li>
                        <li><AiTwotoneHeart /></li>
                      </div>
                    </div>
                    <div className="detail">
                      <p>{curElm.Cat}</p>
                      <h3>{curElm.Title}</h3>
                      <h4>{curElm.Price}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
