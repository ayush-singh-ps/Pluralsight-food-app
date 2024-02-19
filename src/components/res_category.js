import Item from "./items";
import usercontext from "./usercontext";
import { useContext ,useState} from "react";
import { ArrowDownIcon } from "@pluralsight/icons";

const Category=(props)=>{
    const [info,setinfo]=useState('s');
    const data=useContext(usercontext);
    
    const showindex=props.showindex;
    const setit=props.seit;

    // const[showitem,setshow]=useState(false);
    const toggle=()=>{
        setit();
    }
    return(
        
        <div className="w-6/12 m-auto my-4 bg-gray-50 shadow-lg p-4 ">
            
            <div className="flex justify-between font-bold cursor-pointer" onClick={toggle} >
            <span>{props.data.title} - ({props.data.itemCards.length})</span>
           
            <span></span>
            
            </div>
            <usercontext.Provider value={{username:info}}>
            {showindex &&
            
            <div>
                <Item key={props.data.itemCards[0].card.info.id} data={props.data.itemCards}/>
            </div>}
            {data.username}
            </usercontext.Provider>

        </div>
        
    )
}

export default Category;