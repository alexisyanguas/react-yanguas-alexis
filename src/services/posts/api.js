export const fetchPosts = () => fetch("https://dummyjson.com/users")
.then((data) => data.json());

