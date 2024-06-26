import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
import { useParams } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';

import { Link } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();



  const handleSubmit = async(e) => {
    e.preventDefault();
   

  const verify= await fetch('http://localhost:8080/api/user/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({email,password}),
 
  });
  const { token,user } = await verify.json();
  localStorage.setItem('token', token);
  
//   const res=await verify.json();
//  console.log(res)
  if(user){
    navigate('/body');
    toast('welcome user')}
  else {
    // localStorage.setItem('token', token);
    
    
    navigate('/login')
    toast.error('Enter correct credentials')
    
   
    
  }

 
  

    
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-custom-purple py-12 px-4 sm:px-6 lg:px-8">
      <ToastContainer/>
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-cutom-white">
            Sign in to your account
          </h2>
        </div>
        <form  className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            
          </div>

          <div className='text-cutom-white' >
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button >
            
           Not a member?  
           <Link to='/signup'>  <u> Signup here </u></Link>
           
          </div>
        </form>
      </div>
    </div>
  );
};




export default Login;
