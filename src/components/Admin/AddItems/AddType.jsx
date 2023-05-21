import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const AddType = () => {
  const [tname, setTname] = useState("");
  const [pname, setPname] = useState("");
  const [cname, setCname] = useState("");
  const [description, setDescription] = useState("");
  const [typeImage, setTypeImage] = useState(null);
  const history = useNavigate();
  function handleFormSubmit(event) {
    event.preventDefault();
    alert("Type created !!");
    history('/admin');
    const formData = new FormData();
    formData.append("tname", tname);
    formData.append("category",cname);
    formData.append("description", description);
    formData.append("productTypeImage", typeImage);

    console.log(formData.get('cname'))
    fetch("http://localhost:3000/tsir/types/", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const handleSelect = (e)=>{
    setCname(e.target.value);
  }

  function handleFileChange(event) {
    setTypeImage(event.target.files[0]);
  }

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/tsir/category")
        .then((res)=>res.json())
        .then((data)=>{
            setCategories(data);
            setCname(data[0].cname)
        });
    
      }, [])
    
  return (
    <div>
      <h3>Add a new Product type</h3>
      <form className='addcategory-form' onSubmit={handleFormSubmit}>
      <label htmlFor="">Select category</label>
      <select value={cname} onChange={handleSelect}>
      {categories && categories.map((category)=>{
        return(
            <option key={category._id} value={category.cname}>{category.cname}</option>
        )
      })}

      </select>
        <label htmlFor="">Product name</label>
        <input
        type="text"
        value={tname}
        onChange={(e)=> setTname(e.target.value)} 
        required
        />

        <label htmlFor="">Description</label>
        <textarea 
        type="text"
        value={description}
        onChange={(e)=> setDescription(e.target.value)} 
        required
        />

        <label htmlFor="">Add Image file for thumbnail</label>
        <input 
        type="file"
        onChange={handleFileChange}
         />
         <input 
         type="submit"
         />
      </form>
    </div>
  )
}

export default AddType
