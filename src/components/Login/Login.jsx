import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';

import './Login.css';
import { useUserContext } from '../Context/useUserContext';

function Login() {
    const history = useNavigate();
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { userLogin }= useUserContext();
    const handleSubmit = async (e)=> {
        e.preventDefault();

        setIsPending(true)
        const loginData = {
            email: email,
            password: password
        }
        try {
            const res = await fetch('http://localhost:3000/rice1/users/login',{
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(loginData)
            })
            const data = await res.json();
            setError(null)
            userLogin(data)
            localStorage.setItem('userDetails',JSON.stringify(data));
            setIsPending(false)
            history('/')
          } catch (error) {
            userLogin(null)
            setError("Invalid username or password")
            setIsPending(false)
        }

    }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="username">Email</label>
        <input 
        type="text" 
        id="username" 
        name="username" 
        placeholder="Enter username"
        onChange={(e)=> setEmail(e.target.value)} 
        required />

        <label htmlFor="password">Password</label>
        <input 
        type="password" 
        id="password" 
        name="password" 
        placeholder="Enter password"
        onChange={(e)=> setPassword(e.target.value)}  
        required />

        <button type="submit">Login</button>
        <p>Not a user? </p>
        <Link to="/signup">Signup</Link>

        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default Login;
