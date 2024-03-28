import { CARD_LOGO } from "../utils/paths";
// import usercontext from "./usercontext";
// import { useContext } from "react";
import { addItem,removeItem } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const Item=(data)=>

{
    const items=data.data;
    const cart_items=useSelector((store)=>store.cartSlice.items)
    const dispatch=useDispatch();
    // const {username}=useContext(usercontext);
    // items.map((item)=>console.log(`insert into res_cat_items(res_id,res_cat_id,is_recommended,name,price,description,image_cdn) values (230,280,false,'${item.card.info.name}','${item.card.info.price? (item.card.info.price/100):(item.card.info.defaultPrice/100)}','${item.card.info.description}','${item.card.info.imageId}');`))
    const handleClick=(item)=>{
        dispatch(addItem(item))
    }
    const handleRemove=(item)=>{
        dispatch(removeItem(item))
    }
    return (
        <div>
            {items.map((item) => {
                // Check if the item exists in the cart_items array based on its id
                const itemExistsInCart = cart_items.find(cartItem => cartItem.id === item.id);
                
                return (
                    <div key={item.id} data-testid='items' className="p-2 m-2 border-gray-200 border-b-2 text-cutom-white text-left flex justify-between">
                        <div className="w-9/12">
                            <div className="p-2">
                                <span>{item.name}</span>
                                <span> - ₹{item.price}</span>
                            </div>
                            {(item.description!='undefined')?(<p className="text-xs p-2">{item.description}</p>):(<p className="text-xs p-2"> 👉🏻 Most bought</p>)}
                        </div>
                        <div className="w-3/12 relative inline-block">
                            <div className="m-2 w-2/3 left-1/2 translate-x-1/4 -translate-y-2/2 -translate-y-2/2 ">
                                <img alt='no img available' src={CARD_LOGO + item.image_cdn} className="w-full" />
                            </div>

                            {(itemExistsInCart && itemExistsInCart.id===item.id)?

                            (<div className="absolute bottom-0.5 left-1/4 transform -translate-x-1/3 -translate-y-2/2 flex">
                            <button
                                className="ml-10 mr-1 px-4 py-1 bg-cutom-button text-white rounded-lg shadow-lg text-sm"
                                onClick={() => handleClick(item)}
                              >+</button>
                              <div className=" left-1/2   px-4 py-1 -z-10 absolute bg-slate-300 text-black rounded-sm shadow-lg text-sm"> {itemExistsInCart.quan}</div>
                              <button
                                className="  ml-4 px-4 py-1 bg-cutom-button text-white rounded-lg shadow-lg text-sm"
                                onClick={() => handleRemove(item)}
                              >-</button>
                              </div>):
                            (<div className="absolute bottom-0.5 left-1/2 transform -translate-x-1/3 -translate-y-2/2">
                            <button className="p-1 px-2 bg-cutom-button text-white shadow-lg rounded-lg text-s" onClick={() => handleClick(item)} disabled={itemExistsInCart}>Add+</button>
                        </div>)
            }
                        </div>
                    </div>
                );
            })}
        </div>
    );
    
}
export default Item;