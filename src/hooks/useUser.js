import { useEffect, useState } from "react";
import { fetchUsers } from "../services/users/api";
import { transformUser } from "../services/users/utils";

export const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // setTimeout(() => {
        //   const users = createFakeUsers(10);
        //   setUsers(users);
        //   setLoading(false);
        // }, 750);

        // Méthode 1
        // const handleFetchUsers = async () => {
        //   const result = await fetchUsers();
        //   const transformed = result.users.map((transformUser));
        //   setUsers(transformed);
        //   setLoading(false);
        // }
        // handleFetchUsers();

        // Méthode 2
        // fetchUsers().then((data) => {
        //   const transformed = data.users.map((transformUser));
        //   setUsers(transformed);
        //   setLoading(false);
        // })

        // Méthode 3    
        (async () => {
            const data = await fetchUsers();
            const transformed = data.users.map(transformUser);
            setUsers(transformed);
            setLoading(false);
        })();
    }, []);

    const deleteUser = (id) => {
      setUsers(users.filter((user) => user.id !== id));
    };

    return { users, loading, setUsers, deleteUser };
};