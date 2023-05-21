import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Products.css'
import Loading from '../Home/Loading';
const Products = () => {

  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setIsPending(true)
    fetch("http://localhost:3000/tsir/category")
    .then((res)=>res.json())
    .then((data)=>{
        setCategories(data);
        setIsPending(false);
        setError(null);
    }).catch((err)=>{
      setIsPending(false)
      setError(err.message)
    });

  }, [])

    return (
    <div className='products'>
      {error && <p>{error}</p>}
      {!isPending ? !error ? (
                <>
                <h2>Our Products</h2>
                <p>The products produced by Sivagiri Murugan Traders including</p>
                <div className='grid'>
                <div className='products-grid'>
                  {categories ? categories.map((category)=>{
                        return(<Link key={category._id} to={`/types/${category.cname}`}>
                            <div className="products-grid-box">
                                <h3>{category.cname}</h3>
                                <img src={category.img} alt="image"/>
                                <p>{category.description}</p>
                            </div>
                        </Link>)
                  }
                  ):<div>No categories to display</div>}
                    </div>
                    </div>
              </>
      ): <></>: <Loading/>}
    </div>
  )
}

export default Products
