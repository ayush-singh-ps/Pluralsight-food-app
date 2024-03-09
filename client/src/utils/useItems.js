import { useState,useEffect } from "react"

const useItem=(res_id,cat_id)=>{

    const [itemlist,setitem] = useState([]);

    useEffect(()=>{
        const fetchdata= async()=>{
            const dataFetch = await fetch('http://localhost:8080/api/item/' +res_id+'/'+cat_id );
            const json = await dataFetch.json();
            

            setitem(json);
      
        
         
    };
    fetchdata();
    },[res_id,cat_id]);

        return itemlist;
};

export default useItem;