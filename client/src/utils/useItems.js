import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
const useItem=(res_id,cat_id)=>{

    const [itemlist,setitem] = useState([]);
    const token = localStorage.getItem('token');
    const navigate=useNavigate();
    useEffect(()=>{
        const fetchdata= async()=>{
            const dataFetch = await fetch('http://localhost:8080/api/item/' +res_id+'/'+cat_id , {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, 
                },
              });
            const json = await dataFetch.json();
            if(json.error){
                navigate('/login');
                toast.error("You need to login first");
            }
            

            setitem(json);
      
        
         
    };
    fetchdata();
    },[res_id,cat_id]);

        return itemlist;
};

export default useItem;