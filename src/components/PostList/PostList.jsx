import React from 'react';
import Post from '../Post/Post';
import './PostList.scss';

export default function PostList({ sortedPosts, removePost, switchComplete }) {
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
