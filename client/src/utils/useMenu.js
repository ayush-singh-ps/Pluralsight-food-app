import { useState,useEffect } from "react"

const useMenu=(menuid)=>{

    const [menulist,setmenu] = useState([]);
    const token = localStorage.getItem('token');
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
          console.log(document.cookie)
        const json = await dataFetch.json();
        

       
        setmenu(json);
       
        
         
};
fetchdata();
},[menuid]);

    return menulist;
};

export default useMenu;