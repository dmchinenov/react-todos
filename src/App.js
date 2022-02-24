import React, { useState } from 'react';
import PostForm from './components/PostForm/PostForm';
import PostList from './components/PostList/PostList';
import RSelect from './components/UI/RSelect/RSelect';
import './index.scss';

function App() {
  const [posts, setPosts] = useState([]);
  const createPost = (post) => {
    setPosts([...posts, post]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((el) => el.timestamp !== post.timestamp));
  };

  const switchComplete = (post, value) => {
    const newPosts = posts.map((el) => {
      if (el.timestamp === post.timestamp) {
        const newel = el;
        newel.complete = value;
        return newel;
      }
      return el;
    });
    setPosts(newPosts);
  };

  const filterOptions = [
    { value: 'timestamp', name: 'По дате' },
    { value: 'title', name: 'По названию' },
  ];

  const [selectedSort, setSelectedSort] = useState({ value: '', name: 'Сортировать по' });
  const sortPosts = (value) => {
    const newSort = filterOptions.find((sort) => sort.value === value);
    setSelectedSort(newSort);
    if (value === selectedSort.value) {
      setPosts(posts.reverse());
      return;
    }
    if (value === 'timestamp') {
      setPosts(posts.sort((a, b) => a[newSort.value] - b[newSort.value]));
      return;
    }
    if (value === 'title') {
      setPosts(posts.sort((a, b) => a[newSort.value].localeCompare(b[newSort.value])));
    }
  };

  const searchPost = (value) => {
    setPosts(posts.filter((post) => post.title.includes(value) || post.desc.includes(value)));
  };

  return (
    <div className="App">
      <div className="app__container">
        <h1 className="app__title">ТУДУХА</h1>
        <PostForm createPost={createPost} searchPost={searchPost} />
        {
          posts.length > 0
            ? (
              <div className="app__filter-select">
                <RSelect
                  options={filterOptions}
                  placeholder="Сортировать по"
                  className="app__filter-select"
                  selectedSort={selectedSort}
                  sortPosts={sortPosts}
                />
              </div>
            )
            : ''
        }
        {
          posts.length > 0
            ? <PostList posts={posts} removePost={removePost} switchComplete={switchComplete} />
            : <span className="app__no-posts">Тудухи не найдены</span>
        }
      </div>
    </div>
  );
}

export default App;
