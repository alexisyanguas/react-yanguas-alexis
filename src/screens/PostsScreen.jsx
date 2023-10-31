import { useState, useEffect, useMemo } from 'react'
import '../App.css'
import Button from '../components/Button'
import { createFakeUsers } from '../services/createFakeUsers'
import { createFakePosts } from '../services/createFakePosts'
import ListItem from '../components/ListItems'
import CommeTuVeux from '../components/CommeTuVeux'
import ListContainer from '../components/ListContainer'
import CircleButton from '../components/CircleButton'
import google from '../assets/google.svg'
import TextField from '../components/TextField'

const App = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const users = createFakeUsers(10);
      setUsers(users);
      const posts = createFakePosts(10, users); 
      setPosts(posts);
      setLoading(false);
    }, 750);
  }, []);

  const createPost = () => {
    setPosts((posts) => [...createFakePosts(1, users), ...posts]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  }

  const getUsersById = (users, id) => {
    return users.find((user) => user.id === id);
  }

  const filtered = useMemo(() => {
    if (!search) return posts;
    return posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, posts]);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <div className="">
        <TextField
          placeholder="Rechercher"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button width="16" height="3" onClick={createPost}>
          Create Post
        </Button>
        <ListContainer>
          {filtered.map((post) => (
            <CommeTuVeux
              key={post.id}
              title={post.title}
              body={post.body}
              image={post.image}
              user={getUsersById(users, post.userId)}
              onClick={() => deletePost(post.id)}
            />
          ))}
        </ListContainer>
      </div>
    </>
  );
}

export default App
