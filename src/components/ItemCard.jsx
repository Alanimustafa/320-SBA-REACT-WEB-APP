import "./ItemCard.css"
import { Link } from "react-router-dom"

const ItemCard = ({item}) => {
    // console.log("The is the item Card " + item.title) // For Test Only The Item prop

    return (
        <>
            <div className="itemCardMainContainer">
                <Link className="LinkToItemDetails" to={`/details/${item.id}`}>
                    <h4 className="ItemCardHeader">{item.title}</h4>                
                </Link>
                <div className="ItemCardImageContainer">
                    <img className="ItemCardImage" src={item.image}/>
                </div>
                <p className="ItemCardDescription">{item.description}</p>
                <div className="ItemCardMoreDetailsLinkContainer">
                    <p className="ItemCardPrice">Price : ${item.price}</p> 
                    <Link className="ItemCardMoreDetailsLink" to={`/details/${item.id}`}>more dedails...</Link>
                </div>
            </div>
        </>
    )
}


export default ItemCard