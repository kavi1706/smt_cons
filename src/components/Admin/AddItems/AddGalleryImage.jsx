import React, { useState } from 'react'
import './AddCategory.css'

const AddGalleryImage = () => {

  const [image, setImage] = useState(null);

  function handleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("galleryImage", image);

    console.log(formData.get('galleryImage'))
    fetch("http://localhost:3000/tsir/gallery/image", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        setImage(null);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function handleFileChange(event) {
    setImage(event.target.files[0]);
  }
  return (
    <div>
      <h3>Add to Gallery</h3>
      <form className='addcategory-form' onSubmit={handleFormSubmit}>
        <label htmlFor="">Add Image file to gallery page</label>
        <input 
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        />
         <input type="submit"/>
      </form>
    </div>
  )
}

export default AddGalleryImage
