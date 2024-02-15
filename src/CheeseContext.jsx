import { createContext } from "react";

const CheeseContext = createContext({
  cheeses: [],
  isSelected: false,
});

export default CheeseContext;


