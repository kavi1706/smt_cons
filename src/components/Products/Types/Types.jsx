import React, { useState, useEffect } from 'react'
import { useParams, Link} from 'react-router-dom'
import './Types.css'
import Loading from '../../Home/Loading';
const Types = () => {
  const params = useParams();
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [types, setTypes] = useState([]);

  useEffect(() => {
    setIsPending(true)
    fetch(`http://localhost:3000/tsir/category/type/${params.category}`)
    .then((res)=>res.json())
    .then((data)=>{
      setTypes(data);
      setIsPending(false);
      setError(null)
    }).catch( err =>{
      setIsPending(false)
      setError(err.message)
    });

  }, [])

  return (
    <div className='products'>
        <h2>The types in {params.category} category</h2>
      <div className='products-grid'>
        {error && <p>{error}</p>}
        {!isPending ? !error ? (
          <>
            {types ? types.map((type)=>{
            return(
            <Link key={type._id} to={`/productslist/${type.tname}`}>
            <div className="products-grid-box">
              <h3>{type.tname}</h3>
              <img src={type.img} alt="image"/>
              <p>{type.description}</p>
            </div>
            </Link>)
        }
        ):<div>No categories to display</div>}
          </>
        ): <></>: <Loading/>}
      </div>
    </div>
  )
}

export default Types
