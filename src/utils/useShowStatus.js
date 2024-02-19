import { useState,useEffect } from "react";
const useShowStatus=()=>{
    const[onlinestatus,setstatus]=useState(true);
useEffect(()=>{
    window.addEventListener('offline',()=>{
        setstatus(false);
    })
    window.addEventListener('online',()=>{
        setstatus(true);
    })

},[]);
    return onlinestatus;

};
export default useShowStatus;