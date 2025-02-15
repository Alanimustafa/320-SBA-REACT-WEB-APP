import ItemCard from "./ItemCard";
import "./ItemList.css"

const ItemList = ({ items }) => {
    return (
        <div className="itemListMainContainer">
            {/* Passing the item prop to the ItemCard which display a card for each item in the items array with some information about the product */}
          {items.map(item => <ItemCard key={item.id} item={item} />)}
        </div>
      );
  };
  
  export default ItemList;