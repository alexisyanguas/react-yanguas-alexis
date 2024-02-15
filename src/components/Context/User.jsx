import { useContext } from "react";
import UserContext from "../../UserContext";
import CheeseContext from "../../CheeseContext";

const User = () => {
  const { user, login } = useContext(UserContext);
  const { isSelected } = useContext(CheeseContext);

  if (!user) return <button onClick={() => login()}>Login</button>;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        border: isSelected ? "1px solid red" : "none",
      }}
    >
      <img
        style={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          objectFit: "cover",
        }}
        src={user?.photo}
        alt={user?.name}
      />
      <p style={{ color: user?.isAdmin ? "green" : "black", fontSize: 26 }}>
        {user?.name}
      </p>
    </div>
  );
};

export default User;
