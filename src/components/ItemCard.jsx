import "./ItemCard.css"

const ItemCard = ({item}) => {
    // console.log("The is the item Card " + item.title) // For Test Only The Item prop

    return (
        <>
            <div className="itemCardMainContainer">
                <h3 className="ItemCardHeader">{item.title}</h3>
                <div className="ItemCardImageContainer">
                    <img className="ItemCardImage" src={item.image}/>
                </div>
                <p className="ItemCardDescription">{item.description}</p>
            </div>
        </>
    )
}


export default ItemCard