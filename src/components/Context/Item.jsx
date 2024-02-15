import { useContext } from "react";
import UserContext from "../../UserContext";

const Item = ({ cheese }) => {
  const { user } = useContext(UserContext);

  if (cheese.isAdmin === true && !user?.isAdmin)
    return <div>Impossible de voir ce fromage</div>;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <img
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
        src={cheese.photo}
        alt={cheese.name}
      />
      <h3>{cheese.name}</h3>
    </div>
  );
};

export default Item;
