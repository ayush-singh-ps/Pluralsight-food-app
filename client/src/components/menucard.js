import { useEffect, useState } from "react";
import Shimmer from "./skimmer";
import { useParams } from "react-router-dom";
import useMenu from "../utils/useMenu.js"
import Category from "./res_category.js";
import { useLocation } from 'react-router-dom';
const Menu=()=>{
    const[show,setit]=useState(null);
    const{menuid}=useParams();
  
    const menu=useMenu(menuid);
    const menulist=menu;
    const location = useLocation();
    // const { catid } = location.state;
    const catid=1;
  
    // if(customPropValue)setit(customPropValue)
    // if (menulist.length===0) return <Shimmer/>
   
// console.log(Object.getPrototype(menulist))
useEffect(()=>{
    menulist.forEach((items, index) => {

        if (items.res_cat_id === catid) {
            
            setit(index);
        }
    });
},[catid])


    
    return(
        <div>
       {
       menulist.map((items,index)=>
      
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
