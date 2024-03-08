import Userclass from "./Userclass";
import usercontext from "./usercontext";
import { useContext } from "react";
const About=()=>{
    const {username}=useContext(usercontext);
    return (
        <div className="parent">
        <h1>this is the about section</h1>
        user:{username}
        <Userclass name={"Ayush"} location={"Pluralsight"}/>
        </div>

    );
};


export default About;