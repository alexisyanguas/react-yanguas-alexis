import { useContext } from "react";
import Item from "./Item";
import CheeseContext from "../../CheeseContext";

const ItemList = () => {
  const { cheeses } = useContext(CheeseContext);
  return (
    <div>
      {cheeses.map((cheese, key) => (
        <Item cheese={cheese} key={key} />
      ))}
    </div>
  );
};

export default ItemList;
