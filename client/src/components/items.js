import { CARD_LOGO } from "../utils/paths";
// import usercontext from "./usercontext";
// import { useContext } from "react";
import { addItem } from "../store/cartSlice";
import { useDispatch } from "react-redux";
const Item=(data)=>

{
    const items=data.data;
    const dispatch=useDispatch();
    // const {username}=useContext(usercontext);
    // items.map((item)=>console.log(`insert into res_cat_items(res_id,res_cat_id,is_recommended,name,price,description,image_cdn) values (230,280,false,'${item.card.info.name}','${item.card.info.price? (item.card.info.price/100):(item.card.info.defaultPrice/100)}','${item.card.info.description}','${item.card.info.imageId}');`))
    const handleClick=(item)=>{
        dispatch(addItem(item))
    }
    return(
        <div>
           
            {items.map((item)=>
            
            <div data-testid='items' className="p-2 m-2 border-gray-200 border-b-2 text-cutom-white text-left flex justify-between ">
                
                <div className="w-9/12 ">
                <div className="p-2">
               <span> {item.name}</span>
               <span> - ₹{item.price}</span>
               </div>
               <p className="text-xs p-2">{item.description}</p>
               </div>
               <div className="w-3/12  relative inline-block">
               

               <div className="m-2 w-2/3 left-1/2 translate-x-1/4 -translate-y-2/2 -translate-y-2/2">
               <img alt='no img available'src={CARD_LOGO+item.image_cdn}className="w-full"/>
               </div>
               <div className="absolute bottom-0.5 left-1/2 transform -translate-x-1/3 -translate-y-2/2">
                    <button className="p-1 px-2 bg-cutom-button text-white shadow-lg rounded-lg text-s" onClick={()=>handleClick(item)}>Add+</button>
                </div>

               </div>
            </div>)}
        </div>
    ) 
}
export default Item;