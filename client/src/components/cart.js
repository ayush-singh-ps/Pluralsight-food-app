import { useSelector } from "react-redux";
import Item from "./items";
import { useDispatch } from "react-redux";
import { clearCart } from "../store/cartSlice";
// import CartItem from "./CartItem";
const Cart=()=>{
    const items=useSelector((store)=>store.cartSlice.items)

    const dispatch=useDispatch();
    const handleclear=()=>{
        dispatch(clearCart())

    // const calculatetotal=(items)=>{
    //     let sum=0;
    //     items.forEach(item=>{
    //         sum+=item.price
    //     })
    //     return sum;
    // }
    }
    return (
        <div className="text-center  ">
            <h1 className="font-bold text-cutom-white text-4xl">cart</h1>
            <button className="text-cutom-white bg-cutom-button p-2 m-2 rounded-md" onClick={()=>handleclear()}>Clear Cart</button>
            
            <div data-testid='cartitem' className="w-6/12 m-auto">
            <Item data={items}/>
            {/* {items.map((item)=>{
                <CartItem item={item}/>
            })} */}
            </div>
            {/* <p className="text-cutom-white">total bill={(items)=>calculatetotal(items)}</p> */}
            
            
        </div>
    )
};
export default Cart;