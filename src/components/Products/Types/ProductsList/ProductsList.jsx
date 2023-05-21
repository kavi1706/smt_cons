import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useUserContext } from '../../../Context/useUserContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import './ProductsList.css'
import Loading from '../../../Home/Loading';


const ProductsList = () => {
  const params = useParams();
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false);
  const {userDetails} = useUserContext();
  const navigate = useNavigate();
  const addToCart = async (pid)=>{
    if(!userDetails){
      const message = "You must login to continue"
      toast.warning(message,{
        position: toast.POSITION.TOP_LEFT,
        toastId: message
      })
      navigate('/login')
    }
    else
    {
    try {
      const res = await fetch(`http://localhost:3000/tsir/purchase/addtocart/${userDetails._id}/${pid}`,{
          method: 'POST',
          headers: {
              'Content-Type':'application/json'
          },
      })
      const data = await res.json();
      if(data.error){
        const message = "Item is already in cart"
        toast.error(message,{
          position: toast.POSITION.TOP_LEFT,
          toastId: message
        })
      }
      else{
        toast.success("Item added to cart",{
          position: toast.POSITION.TOP_LEFT
        })
      }
      setIsPending(false)
    } catch (error) {
      console.log(error)
      setError("Error in adding to cart");
      setIsPending(false);
  }}
  }

  useEffect(() => {
    setIsPending(true)
    fetch(`http://localhost:3000/tsir/category/product/${params.type}`)
    .then((res)=>res.json())
    .then((data)=>{
      setProductList(data);
      setIsPending(false)
      setError(null)
    }).catch(err=> {
      setError(err.message)
      setIsPending(false)
    });

  }, [])
  return (
    <div className='products-list'>
      <h2>The products in {params.type} type</h2>
        <div className='products-list-grid'>
          {error && <p>{error}</p>}
          {!isPending ? !error ? (
            <>
              {productList ? productList.map((product)=>{
                return(
                    <div key={product._id} className="products-list-grid-box">
                        <h3>{product.pname}</h3>
                        <img src={product.img} alt="image"/>
                        <p>{product.description}</p>
                        <p>{product.cname}</p>
                        <h4 style={{marginBottom: "5px"}}>PRICE: {product.price}/piece</h4>
                        {/* <p>Ratings: {product.rating}</p> */}
                        <button onClick={()=>addToCart(product._id)}>Add to cart</button>
                    </div>
                    )
          }
          ):<div>No Products to display</div>}
            </>
          ): <></>: <Loading/>}
        </div>
    </div>
  )
}

export default ProductsList
