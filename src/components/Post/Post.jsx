import React from 'react';
import RButton from '../UI/RButton/RButton';
import './Post.scss';

export default function Post(props) {
  const { post, removePost } = props;
  return (
    <div className="post">
      <div className="post__text-block">
        <span className="post__title">{post.title}</span>
        <span className="post__desc">{post.desc}</span>
      </div>
      <div className="post__button-block">
        <RButton onClick={() => removePost(post)}>Удалить</RButton>
        <RButton>Выполнить</RButton>
      </div>
    </div>
  );
}
