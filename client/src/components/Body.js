import { useState } from "react";

import Card,{Promotedcard} from "./Card";
import {  useEffect} from "react";
import Shimmer from "./skimmer";
import { Link } from "react-router-dom";
import useShowStatus from "../utils/useShowStatus";


const Body=()=>{
    let [listofrest,setlist]=useState([]);
    let [userinput,setinput]=useState("");
    let [filterList,setfilter]=useState([]);
    
    
    
    useEffect(() => {
        const fetchData = async () => {
            try {
               
                const token = localStorage.getItem('token');
                const dataFetch = await fetch("http://localhost:8080/api/", {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`, 
                    },
                  });
                const json = await dataFetch.json();
             
                setlist(json);
                setfilter(json);
                
               
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        
        fetchData(); // Call the fetchData function
        
        
    }, []); // Empty dependency array means this effect runs once, similar to componentDidMount
    

    
        

    
    const status=useShowStatus();
    const Procard=Promotedcard(Card);
    if(status===false)return <p>oops! something went wrong</p>
    
    return listofrest.length===0? <Shimmer /> :(
       
        <div className="body-container bg-custom-purple">
            <div className="flex btn-container m-4 mt-0 p-4 ">
            
                
                <div className="search">
                    <input name='input' type="text" className="border border-solid bg-custom-color p-1 text-cutom-white border-cutom-button rounded-md font-extralight" placeholder=" 🔎  Search" value={userinput} onChange={(e)=>setinput(e.target.value)}/>
                    <button className="px-4 py-0.5 bg-cutom-button text-cutom-white m-4 rounded-lg" onClick={()=>{
                        console.log(userinput);
                        listofrest=listofrest.filter((data)=>data.name.toLowerCase().includes(userinput.toLowerCase()));
                        console.log(listofrest);

                        listofrest.length === 0 ? alert("No value found") : setfilter(listofrest);

                    }}>Search</button>
                </div>
                
                <div>
                    <button className="px-4 bg-cutom-button py-0.5 text-white m-4 rounded-lg" onClick={()=>{
                        listofrest=listofrest.filter((obj)=>obj.ratings > 4.2);
                        setfilter(listofrest);
                    }
                    }>Filter top Restaurant</button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {filterList.map((data)=>
                   
                <Link key={data.id}
                to={"/menu/"+data.id}>
                   
                    {data.ratings>4.4? (<Procard resdata={data}/>):
                    (<Card  resdata={data}/>)} </Link>)}
            </div>
        </div>
        
    );
}
export default Body;



