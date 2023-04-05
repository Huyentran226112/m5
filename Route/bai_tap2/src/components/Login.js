import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    function handleLogin(e){
        e.preventDefault();
        if(email === 'admin@gmail.com' && password === 'letmein'){
          // chuyen huong 
            navigate(`/Employee`);
        }else{
            alert('Invalid email or password');
        }
    }
    return (
        <form onSubmit={handleLogin}>
          <div>
            <label>Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <button type="submit">Login</button>
        </form>
      );
}
export default Login;