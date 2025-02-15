import ItemCard from "./ItemCard";

const ItemList = ({ items }) => {
    return (
        <div>
            {/* Passing the item prop to the ItemCard which display a card for each item in the items array with some information about the product */}
          {items.map(item => <ItemCard key={item.id} item={item} />)}
        </div>
      );
  };
  
  export default ItemList;