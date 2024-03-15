import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate=useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    
    const {name,email,password}=formData;
    if (formData.password !== formData.confirmPassword) {
      alert("Password and Confirm Password don't match!");

     
    }
    const verify= await fetch('http://localhost:8080/api/user/register', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        
        body: JSON.stringify({name,email,password}),
     
      });
      const res=await verify.json();
  if(res.success)navigate('/login')
  else{
    alert('user not created')
}
    
  };

  return (
    <div className='bg-custom-purple h-screen fixed top-0 left-0 bottom-0 right-0 '>
    <div className="max-w-md mx-auto mt-8 ">
      <h2 className="text-2xl font-bold mb-4 text-cutom-white">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 text-cutom-white">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 text-cutom-white">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1 text-cutom-white">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block mb-1 text-cutom-white">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            required
          />
        </div>
        <button type="submit" className=" bg-cutom-button text-cutom-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">Sign Up</button>
      </form>
    </div>
    </div>
  );
}

export default Signup;
