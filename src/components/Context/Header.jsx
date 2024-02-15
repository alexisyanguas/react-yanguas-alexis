import { useContext } from "react";
import UserContext from "../../UserContext";
import User from "./User";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <header>
      <User />
    </header>
  );
};

export default Header;
