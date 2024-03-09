import { useState,useEffect } from "react"
// import { MENU_URL } from "./paths";
const useMenu=(menuid)=>{

    const [menulist,setmenu] = useState([]);

useEffect(()=>{
    const fetchdata= async()=>{
        const dataFetch = await fetch('http://localhost:8080/api/show/' +menuid )
        const json = await dataFetch.json();
        

        // console.log(json.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
        setmenu(json);
        // console.log(json);
        
         
};
fetchdata();
},[menuid]);

    return menulist;
};

export default useMenu;