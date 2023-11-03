import { useState, useEffect, useMemo } from 'react'
import '../App.css'
import Button from '../components/Button'
import { createFakePosts } from '../services/createFakePosts'
import CommeTuVeux from '../components/CommeTuVeux'
import ListContainer from '../components/ListContainer'
import TextField from '../components/TextField'
import { usePost } from '../hooks/usePost'

const App = () => {
  const { posts, loading, setPosts, deletePost, users } =
    usePost();
  const [search, setSearch] = useState('');

  const createPost = () => {
    setPosts((posts) => [...createFakePosts(1, users), ...posts]);
  };
  

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
              user={post.user}
              onClick={() => deletePost(post.id)}
            />
          ))}
        </ListContainer>
      </div>
    </>
  );
}

export default App
