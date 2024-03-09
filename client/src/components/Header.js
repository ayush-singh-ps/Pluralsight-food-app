import { LOGO_URL } from "../utils/paths";
import { Link } from "react-router-dom";
import useShowStatus from "../utils/useShowStatus";
import { useContext } from "react";
import usercontext from "./usercontext";
import { useSelector } from "react-redux";


const Header=()=>{
    const status=useShowStatus();
    const username=useContext(usercontext);
   
    const cart=useSelector((store)=>store.cartSlice.items);
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg">
        <img className="w-36" src={LOGO_URL} alt="img not available"/>
        <h2 className="text-lg my-10">Pluralsight!</h2>
        <div className="flex items-center" >
        <ul className="flex p-4 m-4">    
            <li className="px-4">{status? "🟢":"🔴"}</li>
             <li className="px-4 "><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/about">About Us</Link></li>
            <li className="px-4"><Link to="/contact">Contact Us</Link></li>
            <li className="px-4"><Link to="/cart">Cart - ({cart.length} item)</Link></li>
            <li className="px-4 font-semibold">User:[{username.username}]</li>
            
        </ul>
        </div>
    </div>
    
     );
 };

 export default Header;
 