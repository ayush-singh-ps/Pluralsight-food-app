import { CARD_LOGO } from "../utils/paths";
// import usercontext from "./usercontext";
// import { useContext } from "react";
import { Link } from "react-router-dom";
import { addItem,removeItem } from "../store/cartSlice";
import { useDispatch } from "react-redux";
const CartItem=(data)=>

{
    const items=data.data;

    const dispatch=useDispatch();
   
    const handleClick=(item)=>{
        dispatch(addItem(item))
    }
    const handleRemove=(item)=>{
        dispatch(removeItem(item))
    }
    
    
    return(
        <div>
        {items.map((item) => (
           
            
          <div data-testid='items' key={item.id} className="flex items-center justify-between p-2 mb-2 border-b-2 border-gray-200 text-cutom-white">
           
            <div className="w-9/12 hover:underline" >
            <Link to={{ pathname: `/menu/${item.res_id}`, state: { catid: `hiii`} }}>
              <div className="flex items-center">
                <span className="mr-2 text-cutom-white">{item.name}</span>
                <span> ₹{item.price}</span>
               
           
             
              </div>
               </Link>
            </div>
           
            <div className="w-3/12 relative">
            
              <div className="w-2/5 mx-auto mb-2">
              <Link to={{ pathname: `/menu/${item.res_id}`, state: { catid: 1 } }}>
                <img
                  alt={item.name}
                  src={CARD_LOGO + item.image_cdn}
                  className="w-full rounded-lg shadow-lg"
                />
                </Link>
              </div>
              
              
             
              <div className="flex justify-center">
                <button
                  className=" mr-2 px-4 py-1 bg-cutom-button text-white rounded-lg shadow-lg text-sm"
                  onClick={() => handleClick(item)}
                >+</button>
                <div className="  px-4 py-1 -z-10 absolute bg-slate-300 text-black rounded-sm shadow-lg text-sm">{item.quan}</div>
                <button
                  className=" ml-2 px-4 py-1 bg-cutom-button text-white rounded-lg shadow-lg text-sm"
                  onClick={() => handleRemove(item)}
                >-</button>
              </div>
            </div>
          </div>
          
        ))}
        
      </div>
    ) 
}
export default CartItem;