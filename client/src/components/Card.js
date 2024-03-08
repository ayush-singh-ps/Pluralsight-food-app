import { CARD_LOGO } from "../utils/paths";


const Card=(props)=>{
    // console.log(props.data.data);
    const {resdata}=props;
   
    const {
      image_cdn,
        name,
        cuisine,
        ratings,
        costoftwo,
        delievery_time,
      } = resdata;
    
      
    return (
        
        <div className="m-4 p-4 w-[250px] card-container rounded-lg border border-solid bg-gray-100 shadow-lg hover:bg-gray-200 overflow-hidden flex-wrap" >
            <img className="card-logo rounded-lg w-[200px] h-[150px]" src={ CARD_LOGO + image_cdn  } alt="img not available"/>
            <h3 className="w-[250px] font-bold py-4 text-lg"><u>{name}</u></h3>
            {/* <div className="w-[250px]">
                <div className="w-[250px] overflow-hidden"> */}
            <p className="font-thin w-[250px] m-1 p-1 overflow-hidden">{cuisine}</p>
            {/* </div>
            </div> */}
            <p>{ratings} stars</p>
            <p>{costoftwo}</p>
            <p>Delivery in {delievery_time.minutes} mins</p>
        </div>
    
    )
};
// higher order components- takes input as component as gives output as components(enhanced) 
export const Promotedcard=(Card)=>{
    return(props)=>{
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <Card {...props}/>
            </div>
        );
    }
}
export default Card;