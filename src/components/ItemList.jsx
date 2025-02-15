

const ItemList = ({ items }) => {
    return (
      <div>
        {items.map((item, index) => {
            return (
                <>
                <p>{item.id} - {item.title}</p>
                </>
            )
        })}
      </div>
    );
  };
  
  export default ItemList;