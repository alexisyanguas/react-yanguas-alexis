import React, { useContext } from "react";
import UserContext from "../../UserContext";

const Footer = ({ onClick }) => {
  const { user } = useContext(UserContext);

  return (
    <footer>
      <p>{user?.name ?? " impossible d'accèder à User en dehors du context"}</p>
      <p onClick={onClick} style={{ cursor: "pointer" }}>
        © 2021 - Cheese Shop
      </p>
    </footer>
  );
};

export default Footer;
