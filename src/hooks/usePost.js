import { useEffect, useState } from "react";
import { fetchUsers } from "../services/users/api";
import { transformUser } from "../services/users/utils";
import { fetchPosts } from "../services/posts/api";
import { transformPost } from "../services/posts/utils";

export const usePost = () => {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
       (async () => {
            const data = await fetchUsers();
            const transformed = data.users.map(transformUser);
            setUsers(transformed);
            const result = await fetchPosts();
            // result.users car c'est le nom de la clé dans le json de dummyjson
            const transformedPosts = result.users.map(transformPost);
            setPosts(transformedPosts);
            setLoading(false);
       })();
     
    }, []);

    const deletePost = (id) => {
        setPosts(posts.filter((post) => post.id !== id));
    };

    return { posts, loading, setPosts, deletePost, users, getUsersById };
};
