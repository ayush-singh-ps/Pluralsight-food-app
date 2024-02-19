import { CARD_LOGO } from "../utils/paths";
import usercontext from "./usercontext";
import { useContext } from "react";
const Item=(data)=>

{
    const items=data.data;
    const {username}=useContext(usercontext);
    return(
        <div>
            {username}
            {items.map((item)=>
            
            <div className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between ">
                
                <div className="w-9/12">
                <div className="p-2">
               <span> {item.card.info.name}</span>
               <span> - ₹{item.card.info.price? (item.card.info.price/100):(item.card.info.defaultPrice/100)}</span>
               </div>
               <p className="text-xs p-2">{item.card.info.description}</p>
               </div>
               <div className="w-3/12 p-4">
               <div className="absolute my-10">
               <button className="p-2 bg-black text-white shadow-lg mx-9 my-20  rounded-lg">Add+</button>
               </div>
               <img src={CARD_LOGO+item.card.info.imageId}className="w-full"/>
               </div>
            </div>)}
        </div>
    ) 
}
export default Item;