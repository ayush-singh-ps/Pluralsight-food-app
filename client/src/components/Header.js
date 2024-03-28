import { LOGO_URL } from "../utils/paths";
import { Link,useNavigate } from "react-router-dom";
import useShowStatus from "../utils/useShowStatus";
// import { useContext } from "react";
// import {usercontext} from "./login.js"
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {toast} from 'react-toastify'


const Header=()=>{
    const status=useShowStatus();
    // const username=useContext(usercontext);
    const navigate = useNavigate()
    const handleLogout = () => {
       
        localStorage.removeItem('token');
    
       
        navigate('/login')
    
      };
    
    
    const cart=useSelector((store)=>store.cartSlice.items);
    const token=localStorage.getItem('token')

    // useEffect(()=>{
    //     if(token===null)navigate('/login')
    // },[token])
    
    
    return (
        
        <div className="flex justify-between bg-custom-color shadow-lg mb-0.5">
            <div>
        <img className="w-20 mx-4 my-1" src={LOGO_URL} alt="img not available"/>
     
        </div>
        <div className="flex items-center">
        <ul className="flex p-4 m-4">  
            <li className="px-4">{status? "🟢":"🔴"}</li>
             <li className="px-4 font-seri text-cutom-white"><Link to="/body">HOME</Link></li>
            <li className="px-4 font-seri text-cutom-white"><Link to="/about">ABOUT US</Link></li>
            <li className="px-4 font-seri text-cutom-white"><Link to="/contact">CONTACT US</Link></li>
            <li className="px-4 font-seri text-cutom-white"><Link to="/cart">CART  🛒  - ({cart.length} item)</Link></li>
            <li className="px-4 font-seri text-cutom-white"><Link to="/login" onClick={handleLogout}>LOGOUT</Link></li>
            
        </ul>
        
        </div>
    </div>
    
     );
 };

 export default Header;
 