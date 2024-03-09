import Item from "./items";
import usercontext from "./usercontext";
// import { useContext } from "react";
import {useParams} from "react-router-dom";
// import Shimmer from "./skimmer";
import useItem from "../utils/useItems";
const Category=(props)=>{
    // const [info,setinfo]=useState('HERE IS YOUR FOOD');
    // const data=useContext(usercontext);
    
    const showindex=props.showindex;
    const setit=props.seit;

    // const[showitem,setshow]=useState(false);
    const toggle=()=>{
        setit();
    }
    const {menuid}=useParams()
    const itemlist=useItem(menuid,props.data.id)
// if(itemlist.length==0)return <Shimmer/>
    
    return(
        
        <div className="w-6/12 m-auto my-4 bg-gray-50 shadow-lg p-4 ">
           
            <div className="flex justify-between font-bold cursor-pointer" onClick={toggle} >
            <span>{props.data.cat_name} </span>
           
      
            
            </div>
           
            {showindex &&
            
            <div>
                <Item key={props.data.id} data={itemlist}/>
            </div>}
            {/* {data.username} */}
            

        </div>
        
    )
}

export default Category;