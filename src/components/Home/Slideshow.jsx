import React, { useState , useEffect} from 'react';
import './Slideshow.css'
const Slideshow = () => {
    const [urls, setUrls] = useState([]);
    useEffect(()=>{
      fetch("http://localhost:3000/rice1/galleries")
      .then((res)=>res.json())
      .then((data) => {
        const urls = data.map((obj) => obj.image);
        setUrls(urls);
      })
      .catch((err)=>{
        console.log(err)
      })
    },[])
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentIndex((currentIndex + 1) % urls.length);
        }, 3000); // Change image every 5 seconds
    
        return () => clearInterval(intervalId); // Cleanup the interval on unmount
      }, [currentIndex, urls.length]);
    
      const showSlide = () => {
        return <img src={urls[currentIndex]} alt="" />;
      };
    
      return <div id="slideshow-container">{showSlide()}</div>;
    };
    
    export default Slideshow;