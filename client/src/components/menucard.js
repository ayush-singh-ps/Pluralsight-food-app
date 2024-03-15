import { useState } from "react";
import Shimmer from "./skimmer";
import { useParams } from "react-router-dom";
import useMenu from "../utils/useMenu.js"
import Category from "./res_category.js";
const Menu=()=>{
    const[show,setit]=useState(null);
    const{menuid}=useParams();
  
    const menu=useMenu(menuid);
    const menulist=menu;
    if (menulist.length===0) return <Shimmer/>
   

   
    
    return(
        <div>
       {
       (menulist.length===0)?<Shimmer/>:menulist.map((items,index)=>
            <Category 
            key={items.id}
            data={items} 
            seit={()=>setit(index)}
            showindex={show===index? true : false}
            
            />)
            }
   
        </div>
    )

    };

export default Menu;
