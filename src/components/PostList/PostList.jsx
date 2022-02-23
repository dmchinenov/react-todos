import React from 'react';
import Post from '../Post/Post';
import './PostList.scss';

export default function PostList(props) {
  const { posts, removePost, switchComplete } = props;
  return (
    <div className="postList">
      { posts.map((post) => (
        <Post
          post={post}
          key={post.id}
          removePost={removePost}
          switchComplete={switchComplete}
        />
      ))}
    </div>
  );
}
