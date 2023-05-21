import React from 'react'
import './Home.css'
import cuttingImage from "../../images/Home/cutting.png"
import im1 from "../../images/Home/r1.jpg"
import im2 from "../../images/Home/r2.jpg"
import im3 from "../../images/Home/r3.jpg"
import im4 from "../../images/Home/r4.jpg"
import im5 from "../../images/Home/r5.jpg"
import polishImage from "../../images/Home/polish.png"
import sculptureImage from "../../images/Home/sculpture.png"
import transportImage from "../../images/Home/transport.png"
import manufactureImage from "../../images/Home/manufacturing.png"
import person1Image from "../../images/Home/person1.jpg"
import person2Image from "../../images/Home/person2.jpg"
import Slideshow from './Slideshow'

const Home = () => {

    return (
        <>
        <div className="slideshow">
        <div class="pic-ctn">
    <img src={im1} alt="" className="pic"/>
    <img src={im2} alt="" className="pic"/>
    <img src={im3} alt="" className="pic"/>
    <img src={im4} alt="" className="pic"/>
   
  </div>
        </div>
        <br/>
        <div className="services">
            <h2>Our Services</h2>
            <p className='p'>The services by the Sivagiri Murugan Traders including these</p>
            <div className="services-grid">
                <div className="services-grid-box">
                    <img src= {cuttingImage} alt=""/>
                    <h3>Harvesting</h3>
                    <p>Harvesting is done through new technologies and eco friendly</p>
                </div>
                <div className="services-grid-box">
                    <img src={polishImage} alt=""/>
                    <h3>Polishing</h3>
                    <p>Rice are polished and they are rich in nutrient contents</p>                </div>
                <div className="services-grid-box">
                    <img src={sculptureImage} alt=""/>
                    <h3>Packing</h3>
                    <p>Packing is done through enormous huge machines and errorless quantity management</p>
                </div>
                <div className="services-grid-box">
                    <img src={transportImage} alt=""/>
                    <h3>Free Delivery</h3>
                    <p>Free delivery offered for all regular customers and big orders</p>
                </div>
            </div>
        </div>


 
        <div className="manufacture">
            <div className="maufacture-flex">
                <h3>Big Manufacturing outlet</h3>
                <p>Our factory is equipped with advanced machinery and equipment, carefully selected to optimize the production process. From raw material preparation to the final finishing touches, every step is meticulously executed to ensure precision and consistency in our rice manufacturing.</p>
            </div>
            <img src={manufactureImage} alt="" style={{paddingLeft:"20px"}}/>
        </div>
        



        <div className="reviews">
            <h2>Customer Reviews</h2>
            <p>The active customer's reviews for Sivagiri Murugan Traders</p>
            <div className="reviews-grid">
                <div className="reviews-grid-box">
                    <img src={person1Image} />
                    <h3>Vimal</h3>
                    <p>They are customer centric and provides valuable products at reasonable prices. The quality of the products are too much good</p>
                </div>
                <div className="reviews-grid-box">
                    <img src={person2Image} />
                    <h3>Subiga</h3>
                    <p>They are customer centric and provides valuable products at reasonable prices. The quality of the products are too much good</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home
