import React, { useState } from 'react'
import { FaTruckMoving ,FaUserAlt} from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsFillBagPlusFill} from 'react-icons/bs';
import {CiLogin,CiLogout } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import './Nav.css'

const Nav = ({searchbtn}) => {
    const [search,setSearch]= useState("")
    const { loginWithRedirect,logout, user, isAuthenticated } = useAuth0();
  return (
    <>
<div className="free">
    
        <div className="icon">
        <FaTruckMoving/> 
        </div>
        <p >
        Free shipping  when shopping upto 12000
        </p>
        
</div>
<div className="main_header">
            <div className="container">
                <div className="logo">
                    <img width={90} height={90} src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/36b885107148725.5fa08100392dd.jpg" alt="logo" />
                </div>
                <div className="search_box">
                    <input type="text" value={search} placeholder='Search Here' autoComplete='off'  onChange={(e)=> setSearch(e.target.value)}/>
                    <button  onClick={()=> searchbtn (search)} >Search</button>
                </div>
                <div className="icon">
                    {
                        isAuthenticated &&
                        (
                    <div className="account">
                        <div className="user_icon">
                            <FaUserAlt/>

                        </div>
                        <p>Hello {user.name} </p>
                    </div>
                        )
                    }
                    
                    <div className="second_icon">
                        <Link to="/" className='link'><AiOutlineHeart/></Link>
                        <Link to="/cart" className='link'><BsFillBagPlusFill/></Link>

                 

                    </div>

                </div>
            </div>
        </div>
        <div className="header">
            <div className="container">
                <div className="nav">
                <ul>
                    <li>
                        <Link to="/" className='link'>Home</Link>
                    </li>
                    <li>
                        <Link to="/product" className='link'>Product</Link>
                    </li>
                    <li>
                        <Link to="/about" className='link'>About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className='link'>Contact</Link>
                    </li>
                </ul>
                </div>
               
                <div className="auth">
                    {
                        isAuthenticated?
                        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><CiLogout/></button> 
                           :
                           <button onClick={()=> loginWithRedirect()}> <CiLogin/></button>

                    }

                </div>
            </div>
        </div>

    </>
  )
}

export default Nav