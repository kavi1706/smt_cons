import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className='contact-container'>
    <div className='form'>
      <h3 className="fh3">Request a call back</h3>

      <form className="form1">
      <input type="text" placeholder="Full Name"/>
      <input type="email" placeholder="Email"/>
      <input type="text" placeholder="Phone number"/>
      <input type="paragraph
      " placeholder="Message" className="msg"/>
      <a href="#" className="btn">SEND</a>
      </form>
    </div>

    <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9569.737630278874!2d78.36468805800061!3d11.913349532368516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac740be73df7c5%3A0xfcc16b9511f8194b!2sPappireddipatti%2C%20Tamil%20Nadu%20636905!5e0!3m2!1sen!2sin!4v1679586820417!5m2!1sen!2sin"></iframe>    
    </div>
    </div>
  )
}

export default Contact
