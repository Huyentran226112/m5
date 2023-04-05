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
            navigate(`/home/123`);
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
// import React, { useState } from 'react';

// function Login({ onLogin }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (email === 'admin@gmail.com' && password === 'letmein') {
//       onLogin(email);
//     } else {
//       alert('Invalid email or password');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="email">Email:</label>
//       <input type="email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} required />

//       <label htmlFor="password">Password:</label>
//       <input type="password" id="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} required />

//       <button type="submit">Login</button>
//     </form>
//   );
// }

// export default Login;

