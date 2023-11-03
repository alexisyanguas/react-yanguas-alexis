export const fetchUsers = () => fetch("https://dummyjson.com/users")
.then((data) => data.json());

// export const fetchUsers = () => {
//     return fetch("https://dummyjson.com/users")
//     .then((data) => data.json());
// }
