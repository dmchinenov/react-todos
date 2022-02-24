import React from 'react';
import RButton from '../UI/RButton/RButton';
import './Post.scss';

export default function Post(props) {
  const { post, removePost, switchComplete } = props;

  return (
    <div
      title={post.complete ? 'Кликникте два раза, чтобы разблокировать пост' : ''}
      onDoubleClick={() => switchComplete(post, false)}
      className={`post ${post.complete ? 'post_complete' : ''}`}
      style={{ borderLeft: `15px solid ${post.color}` }}
    >
      { post.complete ? <div className="post__complete" /> : '' }
      <div className="post__text-block">
        <span className="post__title">{post.title}</span>
        <span className="post__desc">{post.desc}</span>
        <span className="post__date">{post.date}</span>
      </div>
      <div className="post__button-block">
        <RButton onClick={() => removePost(post)}>Удалить</RButton>
        <RButton onClick={() => switchComplete(post, true)}>Выполнить</RButton>
      </div>
    </div>
  );
}
