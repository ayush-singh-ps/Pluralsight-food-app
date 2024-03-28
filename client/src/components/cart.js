import { useSelector } from "react-redux";
import CartItem from "./cartItem";
import { useDispatch } from "react-redux";
import { clearCart } from "../store/cartSlice";
// import CartItem from "./CartItem";
const Cart=()=>{
    const items=useSelector((store)=>store.cartSlice.items)

    const dispatch=useDispatch();
    const handleclear=()=>{
        dispatch(clearCart())
    }
    const calculatetotal=(items)=>{
        let sum=0;
        items.forEach(item=>{
            sum+=parseFloat(item.price)*item.quan;
            
        })
        return sum.toFixed(2);
    }
    
    return (
        <div className="text-center" >
            <h1 className="font-bold text-cutom-white text-4xl mb-4">Cart</h1>
            <button className="text-cutom-white bg-cutom-button p-2 rounded-md" onClick={()=>handleclear()}>Clear Cart</button>
            
            <div className="w-6/12 mx-auto mt-8">
                <CartItem data={items}/>
               
            </div>

            <div className=" mt-8 my-10">
                <span className="text-xl text-cutom-white">Total:</span>
                <span className="text-2xl font-bold text-cutom-white"> ₹ {calculatetotal(items)}</span>
            </div>
            </div>
    )
};
export default Cart;