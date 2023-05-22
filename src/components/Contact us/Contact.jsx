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
    <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d250491.79403623808!2d77.29008343210492!3d11.192498290744696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d11.2738824!2d77.5967187!4m5!1s0x3ba9070568533e4f%3A0xb3eab09abe1e3936!2s485F%2B32F%20Sivagiri%20Sree%20Murugan%20Traders%2C%20sivagiri%20sree%20murugan%20traders%2C%20College%20Rd%2C%20Odakkadu%2C%20Tiruppur%2C%20Tamil%20Nadu%20641687!3m2!1d11.107677299999999!2d77.32252079999999!5e0!3m2!1sen!2sin!4v1683607817081!5m2!1sen!2sin" ></iframe>    
    </div>
    </div>
  )
}

export default Contact
