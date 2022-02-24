import React from 'react';
import Post from '../Post/Post';
import './PostList.scss';

export default function PostList({ sortedPosts, removePost, switchComplete }) {
  if (sortedPosts.length === 0) {
    return (
      <span className="app__no-posts">Тудухи не найдены</span>
    );
  }
  return (
    <div className="postList">
      { sortedPosts.map((post) => (
        <Post
          post={post}
          key={post.timestamp}
          removePost={removePost}
          switchComplete={switchComplete}
        />
      ))}
    </div>
  );
}
