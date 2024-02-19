import React from "react";

class Userclass extends React.Component{
    constructor(props){
        super(props);
    };
    
    render(){
        const{name,location}=this.props;
        return(
            <div className="react-about">
                <h1>This is the food ordering website </h1>
                <h2>Built by {name} at {location}</h2>
            </div>
        )
    }
}
export default Userclass;
