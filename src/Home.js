import React from 'react'
import {  Link } from 'react-router-dom'
import { FaArrowRight} from 'react-icons/fa';
import { FiTruck} from 'react-icons/fi';
import { FaRupeeSign} from 'react-icons/fa';
import { TbFilePercent} from 'react-icons/tb';
import { ImHeadphones} from 'react-icons/im';
import { AiOutlineShoppingCart,AiOutlineCloseCircle} from 'react-icons/ai';
import { AiFillEye, AiTwotoneHeart} from 'react-icons/ai';
import HomeProduct from "./HomeProduct"
import "./Home.css"

const Home = ({ detail,view, close, setClose, addtocart}) => {
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
                  <button>Add to Cart</button>
                </div>
              </div>
            )
          })
        }
       
      </div>
    </div> :null
    }
  
    <div className="top_banner">
      <div className="container">
        <div className="detail">
          <h2>The Best Note Book Collection 2023</h2>
          <Link to='/product' className='link'>Shop Now <FaArrowRight/> </Link>
        </div>
        <div className="img_box">
          <img src="https://www.pngmart.com/files/7/Mobile-Phone-PNG-Transparent-HD-Photo.png" alt="" />
        </div>
      </div>
    </div>
    <div className="product_type">
      <div className="container">
        <div className="box">
        <div className="img_box">
          <img  src="https://www.pngmart.com/files/2/Smartphone-PNG-HD.png" alt="" />
        </div>
        <div className="detail">
          <p>23 products</p>
        </div>
      </div>

      <div className="box">
        <div className="img_box">
          <img  src="https://pngimg.com/uploads/headphones/headphones_PNG101974.png" alt="" />
        </div>
        <div className="detail">
          <p>52 products</p>
        </div>
      </div>

      <div className="box">
        <div className="img_box">
          <img src="https://pluspng.com/img-png/png-cpu-cpu-png-1000.png" alt="" />
        </div>
        <div className="detail">
          <p>63 products</p>
        </div>
      </div>  

      <div className="box">
        <div className="img_box">
          <img  src="https://www.pngmart.com/files/13/Smartwatch-Transparent-Background.png" alt="" />
        </div>
        <div className="detail">
          <p>18 products</p>
        </div>
      </div>
    </div>
    </div>
    <div className="about">
      <div className="container">
        <div className="box">
          <div className="icon">
            <FiTruck/>
          </div>
          <div className="detail">
            <h3>Free Shipping</h3>
            <p>Order above <FaRupeeSign/>5000</p>
          </div>
        </div>

        <div className="box">
          <div className="icon">
            <FaRupeeSign/>
          </div>
          <div className="detail">
            <h3>Return & Refund</h3>
            <p>Money Back Gurantee</p>
          </div>
        </div>

        <div className="box">
          <div className="icon">
            <TbFilePercent/>
          </div>
          <div className="detail">
            <h3>Member Discount</h3>
            <p>On Every Order</p>
          </div>
        </div>

        <div className="box">
          <div className="icon">
            <ImHeadphones/>
          </div>
          <div className="detail">
            <h3>Customer Support</h3>
            <p>Every Time Call Support</p>
          </div>
        </div>
      </div>
    </div>

    <div className="product">
      <h2>Top Products</h2>
      <div className="container">
        {
          HomeProduct.map((curElm)=>{
            return (
             
                <div className="box"  key={curElm.id}>
                  <div className="img_box">
                    <img width={200} height={200} src={curElm.Img} alt={curElm.Title}></img>
                    <div className="icon">
                      <li onClick={()=> addtocart (curElm)}><AiOutlineShoppingCart/></li>
                      <li onClick={()=> view(curElm)}> <AiFillEye/></li>
                      <li><AiTwotoneHeart/></li>
                    </div>
                  </div>
                  <div className="detail">
                    <p>{curElm.Cat}</p>
                    <h3>{curElm.Title}</h3>
                    <h4>{curElm.Price}</h4>
                  </div>
                </div>
           )
          })
        }
      
      </div>
    </div>

    <div className="banner">
      <div className="container">
      <div className="detail">
        <h4>LATEST TECHNOLOGY ADDED</h4>
        <h3>Apple iPad 10.2 9th Gen -2021</h3>
        <p>₹ 89000</p>
        <Link to='/product' className='link'>Shop Now <FaArrowRight/></Link>
      </div>
      <div className="img_box">
        <img width={500} height={500} src="https://purepng.com/public/uploads/large/purepng.com-ipadelectronicstablet-ipad-941524671278vjvlk.png" alt="" />
      </div>
      </div>
     
    </div>
    
    </>
  )
}

export default Home