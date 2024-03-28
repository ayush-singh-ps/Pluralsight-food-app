import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
const useMenu=(menuid)=>{

    const [menulist,setmenu] = useState([]);
    const token = localStorage.getItem('token');
    const navigate=useNavigate();
useEffect(()=>{
    const fetchdata= async()=>{
        const dataFetch = await fetch('http://localhost:8080/api/show/' +menuid, {
            method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`, 
                    },
          } )
         
        const json = await dataFetch.json();
        if(json.error){
            navigate('/login');
            toast.error("You need to login first")
        }
        
console.log((json.length))
       try {
        
        if((json.length)>0){setmenu(json);}
       } catch (error) {
       
        console.log('error')
       }
    
        
       
        
         
};
fetchdata();
},[menuid]);

    return menulist;
};

export default useMenu;