import { useSelector } from "react-redux";
import Item from "./items";
const Cart=()=>{
    const items=useSelector((store)=>store.cartSlice.items)
    console.log(items)
    return (
        <div className="text-center  ">
            <h1 className="font-bold text-4xl">cart</h1>
            {/* {items.map((item)=><div>{item.name}</div>)} */}
            <div className="w-6/12 m-auto">
            <Item data={items}/>
            </div>
            
            
        </div>
    )
};
export default Cart;