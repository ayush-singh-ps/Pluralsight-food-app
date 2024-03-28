import { CARD_LOGO } from "../utils/paths";


const Card=(props)=>{
  
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
        
        <div data-testid='cards' className="m-4 p-4 w-[250px] card-container rounded-lg border border-custom-h bg-custom-color text-cutom-white shadow-lg hover:bg-custom-h overflow-hidden flex-wrap h-[380px]" >
            <img className="card-logo rounded-lg w-[200px] h-[150px]" src={ CARD_LOGO + image_cdn  } alt="img not available"/>
            <h3 className="w-[200px] truncate font-bold py-4 text-lg"><u>{name}</u></h3>
           
            <p className="font-thin w-[200px] truncate my-1 p-1 text-xs ">{cuisine}</p>
           
            <p>{ratings} stars</p>
            <p> ₹{costoftwo} for two</p>
            <p>Delivery in {delievery_time.minutes} mins</p>
        </div>
    
    )
};

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