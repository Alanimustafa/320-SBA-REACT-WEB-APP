import "./ItemCard.css"
import Details from "../pages/Details"
import { Link } from "react-router-dom"

const ItemCard = ({item}) => {
    // console.log("The is the item Card " + item.title) // For Test Only The Item prop

    return (
        <>
            <div className="itemCardMainContainer">
                <h4 className="ItemCardHeader">{item.title}</h4>
                <div className="ItemCardImageContainer">
                    <img className="ItemCardImage" src={item.image}/>
                </div>
                <p className="ItemCardDescription">{item.description}</p>
                <div className="ItemCardMoreDetailsLinkContainer">
                    <p className="ItemCardPrice">Price : ${item.price}</p> 
                    <Link className="ItemCardMoreDetailsLink" to={`/details`}>more dedails...</Link>
                </div>
                
            </div>
        </>
    )
}


export default ItemCard