import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import { useUserContext } from '../Context/useUserContext';

function Signup() {

  const history = useNavigate();
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null);
  const [user,setUser] = useState(null);
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState({});
  const [city, setCity] = useState();
  const [street, setStreet] = useState();
  const [state, setState] = useState();
  const [email, setEmail] = useState();

  const {userLogin}= useUserContext();
  const handleSubmit = async (e)=> {
      e.preventDefault();
      alert("Signed Up successfully !! Login to continue")
      history('/login')
      setAddress({city,street,state})
      setIsPending(true)
      const signupData = {
          UserName: user,
          password,
          email,
          address,
          phone,
        }
      try {
          const res = await fetch('http://localhost:3000/rice1/users/signup',{
              method: 'POST',
              headers: {
                  'Content-Type':'application/json'
              },
              body: JSON.stringify(signupData)
          })
          const data = await res.json();
          setError(null)
          userLogin(data.UserName)
          console.log(data.UserName)
          
          setIsPending(false)
        } catch (error) {
          setError("Email already exists");
          setIsPending(false);
      }

   }

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label htmlFor="fullname">Name</label>
        <input 
        type="text" 
        id="fullname" 
        name="fullname" 
        placeholder="Enter full name"
        onChange={(e)=>setUser(e.target.value)}
        required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" 
        placeholder="Enter email" 
        onChange={(e)=>setEmail(e.target.value)}
        required />

        <h6 >Address details</h6>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" 
        name="street" 
        placeholder="Enter street" 
        onChange={(e)=>setStreet(e.target.value)}
        required />

        <label htmlFor="city">City</label>
        <input type="text" id="city" name="city"
        onChange={(e)=>setCity(e.target.value)}
        placeholder="Enter city" 
        required />

        <label htmlFor="state">State</label>
        <input type="text" id="state" 
        name="state" 
        placeholder="Enter state"
        onChange={(e)=>setState(e.target.value)} 
        required />

        <label htmlFor="phone">Phone number</label>
        <input type="text" id="phone" 
        name="phone" 
        placeholder="Enter Phone number"
        onChange={(e)=>setPhone(e.target.value)} 
        required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" 
        name="password" 
        placeholder="Enter password"
        onChange={(e)=>setPassword(e.target.value)} 
        required />

        <button type="submit">Sign Up</button>
        <p>Already a user?</p>
        <Link className="" to="/login">Login</Link>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default Signup;
