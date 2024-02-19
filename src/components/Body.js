import { useState } from "react";
import { Button } from '@pluralsight/react'
import Card,{Promotedcard} from "./Card";
import { useState, useEffect} from "react";
import Shimmer from "./skimmer";
import { Link } from "react-router-dom";
import useShowStatus from "../utils/useShowStatus";


const Body=()=>{
    let [listofrest,setlist]=useState([]);
    let [userinput,setinput]=useState("");
    let [filterList,setfilter]=useState([]);
    
    // console.log(listofrest);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataFetch = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
                const json = await dataFetch.json();
                setlist(json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                setfilter(json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                
                // console.log(filterList[0]);
                
                // Now you can use jsonData
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        
        fetchData(); // Call the fetchData function
        
        
    }, []); // Empty dependency array means this effect runs once, similar to componentDidMount
    

    
        
    // * optional chaining 
    
    const status=useShowStatus();
    const Procard=Promotedcard(Card);
    if(status===false)return <p>oops! something went wrong</p>
    
    return listofrest.length===0? <Shimmer /> :(
        <div className="body-container">
            <div className="flex btn-container m-4 p-4 ">
            
                
                <div className="search">
                    <input type="text" className="border border-solid border-black" value={userinput} onChange={(e)=>setinput(e.target.value)}/>
                    <button className="px-4 bg-green-100 m-4 rounded-lg" onClick={()=>{
                        console.log(userinput);
                        listofrest=listofrest.filter((data)=>data.info.name.toLowerCase().includes(userinput.toLowerCase()));
                        console.log(listofrest);

                        listofrest.length === 0 ? alert("No value found") : setfilter(listofrest);

                    }}>Search</button>
                </div>
                <Button sentiment="success" >Cancel</Button>
                <div>
                    <button className="px-4  bg-green-100 m-4 rounded-lg" onClick={()=>{
                        listofrest=listofrest.filter((obj)=>obj.info.avgRating > 4.2);
                        setfilter(listofrest);
                    }
                    }>Filter List</button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {filterList.map((data)=>
                <Link key={data.info.id} 
                to={"/menu/"+data.info.id}>
                    
                    {data.info.avgRating>4.4? (<Procard resdata={data}/>):
                    (<Card  resdata={data}/>)} </Link>)}
            </div>
        </div>
    );
}
export default Body;



