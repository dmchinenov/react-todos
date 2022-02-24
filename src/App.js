import React, { useState } from 'react';
import PostForm from './components/PostForm/PostForm';
import PostList from './components/PostList/PostList';
import RSelect from './components/UI/RSelect/RSelect';
import './index.scss';

function App() {
  const [allPosts, setAllPosts] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [selectedSort, setSelectedSort] = useState({ value: '', name: 'Сортировать по' });

  const createPost = (post) => {
    setAllPosts([...allPosts, post]);
  };

  const removePost = (post) => {
    setAllPosts(allPosts.filter((el) => el.timestamp !== post.timestamp));
  };

  const switchComplete = (post, value) => {
    const newAllPosts = allPosts.map((el) => {
      if (el.timestamp === post.timestamp) {
        const editPost = el;
        editPost.complete = value;
        return editPost;
      }
      return el;
    });
    setAllPosts(newAllPosts);
  };

  const sortOptions = [
    { value: 'timestamp', name: 'По дате', dir: 0 },
    { value: 'title', name: 'По названию', dir: 0 },
  ];

  const getSortedPosts = () => {
    if (selectedSort.dir) {
      return allPosts.reverse();
    }
    if (selectedSort.value === 'timestamp') {
      return allPosts.sort((a, b) => a.timestamp - b.timestamp);
    }
    if (selectedSort.value === 'title') {
      return allPosts.sort((a, b) => a.title.localeCompare(b.title));
    }
    return allPosts;
  };

  const filteredPosts = () => {
    if (searchValue !== '') {
      return getSortedPosts().filter((post) => post.title.toLowerCase().includes(searchValue.toLowerCase()));
    }
    return getSortedPosts();
  };

  const setSortPosts = (value) => {
    const newSort = sortOptions.find((sort) => sort.value === value);
    if (newSort.value === selectedSort.value) {
      newSort.dir = !newSort.dir;
    }
    setSelectedSort(newSort);
  };

  const searchPost = (value) => {
    setSearchValue(value);
  };

  return (
    <div className="App">
      <div className="app__container">
        <h1 className="app__title">ТУДУХА</h1>
        <PostForm createPost={createPost} searchPost={searchPost} />
        {
          filteredPosts().length > 0
            ? (
              <div className="app__filters-block">
                <RSelect
                  options={sortOptions}
                  placeholder="Сортировать по"
                  className="app__filter-select"
                  selectedSort={selectedSort}
                  setSortPost={setSortPosts}
                />
              </div>
            )
            : ''
        }
        {
          filteredPosts().length > 0
            ? (
              <PostList
                sortedPosts={filteredPosts()}
                removePost={removePost}
                switchComplete={switchComplete}
              />
            )
            : <span className="app__no-posts">Тудухи не найдены</span>
        }
      </div>
    </div>
  );
}

export default App;
