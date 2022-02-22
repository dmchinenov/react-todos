import React, { useState } from 'react';
import PostForm from './components/PostForm/PostForm';
import PostList from './components/PostList/PostList';
import './index.scss';

function App() {
  const [posts, setPosts] = useState([]);

  const createPost = (post) => {
    setPosts([...posts, post]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((el) => el.id !== post.id));
  };

  return (
    <div className="App">
      <div className="app__container">
        <h1 className="app__title">ТУДУХА</h1>
        <PostForm createPost={createPost} />
        { posts.length > 0
          ? <PostList posts={posts} removePost={removePost} />
          : <div>Нет постов</div> }
      </div>
    </div>
  );
}

export default App;
