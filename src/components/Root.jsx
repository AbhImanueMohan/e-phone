import React from 'react'
import "./Root.css"
import { BiLogoFacebook} from 'react-icons/bi';
import { BsInstagram} from 'react-icons/bs';
import { BsTwitter} from 'react-icons/bs';
import { BiLogoGmail} from 'react-icons/bi';

const Root = () => {
  return (
    <>
    <div className="footer">
        <div className="container">
            <div className="about">
                <div className="logo">
                <img width={90} height={90} src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/36b885107148725.5fa08100392dd.jpg" alt="logo" />
                </div>
                <div className="detail">
                    <p>We are a team of designers and developers that create high quality Projects</p>
                    
                    <div className="icon">
                        <li><BiLogoFacebook/></li>
                        <li> <BsInstagram/></li>
                        <li><BsTwitter/></li>
                        <li><BiLogoGmail/></li>
                    </div>
                    </div>
            </div>
            <div className="account">
                <h3>My Account</h3>
                <ul>
                    <li>Account</li>
                    <li>Order</li>
                    <li>Cart</li>
                    <li>Shipping</li>
                    <li>Return</li>
                </ul>
            </div>
            <div className="page">
                <h3>Pages</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Root