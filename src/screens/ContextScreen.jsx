import { useState } from "react";
import UserContext, { UserProvider } from "../UserContext";
import Footer from "../components/Context/Footer";
import Header from "../components/Context/Header";
import ItemScreen from "../components/Context/ItemScreen";
import CheeseContext from "../CheeseContext";

const cheeses = [
  {
    id: 1,
    name: "Camembert",
    photo:
      "https://www.produits-laitiers-aop.fr/wp-content/uploads/2021/09/camembert-de-normandie.jpg",
    isAdmin: true,
  },
  {
    id: 2,
    name: "Brie",
    photo:
      "https://www.produits-laitiers-aop.fr/wp-content/uploads/2021/09/brie-de-meaux.jpg",
    isAdmin: false,
  },
  {
    id: 3,
    name: "Roquefort",
    photo:
      "https://www.produits-laitiers-aop.fr/wp-content/uploads/2021/09/roquefort.jpg",
    isAdmin: true,
  },
];

const ContextScreen = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <>
      <CheeseContext.Provider value={{ cheeses, isSelected }}>
        <UserProvider>
          <div>
            <Header />
            <ItemScreen />
          </div>
        </UserProvider>
        <Footer onClick={() => setIsSelected(!isSelected)} />
      </CheeseContext.Provider>
    </>
  );
};

export default ContextScreen;
