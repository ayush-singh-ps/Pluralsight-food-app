import { useState,useEffect } from "react";
import Shimmer from "./skimmer";
import { useParams } from "react-router-dom";
import useMenu from "../utils/useMenu.js"
import Category from "./res_category.js";
const Menu=()=>{
    const[show,setit]=useState(null);
    const{menuid}=useParams();
  
    const menu=useMenu(menuid);
    const menulist=menu.filter((items)=>
            items?.card?.card["@type"]===("type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"))
    if (menulist.length===0) return <Shimmer/>
   

    // const { itemCards, carousel } = 'itemCards' in menulist ? menulist : { carousel: menulist.carousel };

    // console.log(itemCards[1].card.info.name);
    // const {title}=card.card;
    // console.log(title)
    
    return(
        <div>
       {menulist.map((items,index)=>
            <Category 
            key={items.card.card.id}
            data={items.card.card} 
            seit={()=>setit(index)}
            showindex={show===index? true : false}
            
            />)
            }
        {/* <ul>
            {itemCards?
        itemCards.map((item)=><li key={item.card.info.id}>{item.card.info.name}@{item.card.info.defaultPrice? item.card.info.defaultPrice/100:item.card.info.price/100}</li>)
        :
        carousel.map((item)=><li key={item.dish.info.id}>{item.dish.info.name}@{item.dish.info.defaultPrice? item.dish.info.defaultPrice/100:item.dish.info.price/100}</li>)
            }

        </ul> */}
        </div>
    )

    };

export default Menu;
