import { useState, useEffect, useMemo } from "react";
import "../App.css";
import Button from "../components/Button";
import { createFakeUsers } from "../services/createFakeUsers";
import ListItem from "../components/ListItems";
import ListContainer from "../components/ListContainer";
import CircleButton from "../components/CircleButton";
import google from "../assets/google.svg";
import TextField from "../components/TextField";

function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const users = createFakeUsers(10);
      setUsers(users);
      setLoading(false);
    }, 750);
  }, []);

  const createUser = () => {
    // setUsers([...createFakeUsers(1), ...users]);
    setUsers((users) => [...createFakeUsers(1), ...users]);
  };

  const deleteUser = (id) => {
    console.log("id :>> ", id);
    setUsers(users.filter((user) => user.id !== id));
  };

  const filtered = useMemo(() => {
    if (!search) return users;
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, users]);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <div className="card">
        <TextField
          placeholder="Rechercher"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button width="16" height="3" onClick={createUser}>
          Create User
        </Button>
        <CircleButton width="3" height="3" svg={google} color="#FEFEFE" />
        <ListContainer>
          {filtered.map((user) => (
            <ListItem
              key={user.id}
              name={user.name}
              onClick={() => deleteUser(user.id)}
            />
          ))}
        </ListContainer>
      </div>
    </>
  );
}

export default App;
