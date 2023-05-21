import React, { useEffect, useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [images, setImages] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:3000/tsir/gallery/images")
    .then((res)=>res.json())
    .then((data)=>{
      setImages(data)
      console.log(data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])
  return (
    <div className="gallery">
      {images.map((image, _id) => (
        <div className="gallery-item" key={_id}>
          <img src={image.image} alt={`Image ${_id}`} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
