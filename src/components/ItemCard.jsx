

const ItemCard = ({item}) => {
    // console.log("The is the item Card " + item.title) // For Test Only The Item prop

    return (
        <>
            <div className="itemCardMainContainer">
                <h3 className="ItemCardHeader">{item.title}</h3>
                <img className="ItemCardImage" src={item.image}/>
                <pre className="ItemCardDescription">{item.description}</pre>
            </div>
        </>
    )
}


export default ItemCard