import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const AddProducts = () => {
  const [cname, setCname] = useState("");
  const [tname, setTname] = useState('');
  const [pname, setPname] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState("");
  const [productImage, setProductImage] = useState(null);
  const history = useNavigate();

  function handleFormSubmit(event) {
    event.preventDefault();
    alert("New Product created !!");
    history('/admin');
    const formData = new FormData();
    formData.append("type", tname);
    formData.append("category",cname);
    formData.append("pname",pname);
    formData.append("price",price);
    formData.append("rating",0);
    formData.append("description", description);
    formData.append("productImage", productImage);

    console.log(formData.get('cname'))
    fetch("http://localhost:3000/tsir/product", {
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

  function handleFileChange(event) {
    setProductImage(event.target.files[0]);
  }
  const [categories, setCategories] = useState([]);
  const [types, setTypes] = useState([]);
  useEffect(() => {
      fetch("http://localhost:3000/tsir/category")
      .then((res)=>res.json())
      .then((data)=>{
          setCategories(data);
          setCname(data[0].cname)
      });
  
    }, [])

  useEffect(()=>{
    if(cname){
      fetch(`http://localhost:3000/tsir/category/type/${cname}`)
      .then((resp)=>resp.json())
      .then((d)=>{
          setTypes(d);
          setTname(d[0].tname)
          console.log(tname)
      });
    }
  },[cname])
  const handleCnameSelect = (e)=>{
    setCname(e.target.value);
  }
  const handleTnameSelect = (e)=>{
    setTname(e.target.value);
  }


  
  return (
    <div>
      <h3>Add a new product</h3>
      <form className='addcategory-form' onSubmit={handleFormSubmit} action="">

      <label>Category</label> 
      <select value={cname} onChange={handleCnameSelect}>
      {categories && categories.map((category)=>{
        return(
            <option key={category._id} value={category.cname}>{category.cname}</option>
        )
      })}

      </select>

      <label>Type</label>
      <select value={tname} onChange={handleTnameSelect}>
      {types && types.map((type)=>{
        return(
            <option key={type._id} value={type.tname}>{type.tname}</option>
        )
      })}

      </select>

        <label htmlFor="">Product name</label>
        <input
        type="text" 
        value={pname}
        onChange={(e)=> setPname(e.target.value)}
        required
        />

        <label>Price</label>
        <input
        type="number" 
        value={price}
        onChange={(e)=> setPrice(e.target.value)}
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
         <input type="submit"/>
      </form>
    </div>
  )
}

export default AddProducts
