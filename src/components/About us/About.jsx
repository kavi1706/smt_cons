import React from 'react'
import './About.css'
import peopleImage from "../../images/About/a1.jpg"
const About = () => {
  return (
    <div>
        <div class="aboutus">
            <div class="aboutus-flex">
                <h3>About us</h3>
                <h4 className="text-justify mt-2">
         Sivagiri Sri Murugan Traders was found 30 years ago. We are the providers of best brands of rice varieties.Quality means more than the Quantity. So we believe in Business ethics and We assure you that you will never get bored of eating our rice varieties.All rice brands available for all occassions. Orders are welcome 24/7.
          </h4>
            </div>
            <img src={peopleImage} alt=""/>
        </div>
    </div>
  )
}

export default About;


