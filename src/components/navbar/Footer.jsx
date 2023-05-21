import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <nav className='foot'>
      <div className="one">
                <h3>SIVAGIRI MURUGAN TRADERS</h3>
                <p>Sivagiri Murugan Traders is the leading rice selling industry in Tirupur district.</p>
            </div>
            <div className="two">
                  <h3>LINKS</h3>
                  <Link to='/'>HOME</Link>
                  <Link to={'/products'}>PRODUCTS</Link>
                  <Link to={'/gallery'}>GALLERY</Link>
                  <Link to={'/about'}>ABOUT US</Link>
                  <Link to={'/contact'}>CONTACT</Link>
            </div>

            <div className="three">
                <h3>SUBSCRIBE</h3>
                <input type="email" placeholder="Enter email"></input>
                <button><a href="#">Subscribe</a></button>
            </div>

            <div className="four">
                <h3>ADDRESS</h3>
                <p>A.R.P Complex,Asher Nagar 2nd street ,Tirupur-641603.<br/>
                   Email:<br></br>sivagirisrimurugantraders@gmail.com<br/>
                   Phone:<br></br>+91 9443735851

                   </p>
                   
            </div>
    </nav>
  )
}

export default Footer
