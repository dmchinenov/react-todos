import React, { useState } from 'react';
import RButton from '../UI/RButton/RButton';
import RInput from '../UI/RInput/RInput';
import './PostForm.scss';

export default function PostForm({ createPost }) {
  const [post, setPost] = useState({
    title: '', desc: '', complete: false, color: '#000000',
  });
  const addNewPost = (event) => {
    event.preventDefault();
    if (post.title === '') {
      return;
    }
    const newPost = {
      ...post,
      timestamp: Date.now(),
      date: new Date().toLocaleString(),
      complete: false,
    };
    createPost(newPost);
    setPost({
      ...post, title: '', desc: '', color: '#000000',
    });
  };

  return (
    <form onSubmit={addNewPost} className="post-form">
      <RInput value={post.title} onChange={(event) => setPost({ ...post, title: event.target.value })} placeholder="Введите название" />
      <RInput value={post.desc} onChange={(event) => setPost({ ...post, desc: event.target.value })} placeholder="Введите описание" />
      <input type="submit" hidden />
      <div className="fost-form__buttons">
        <RButton onClick={addNewPost}>Создать</RButton>
        <input value={post.color} onChange={(event) => setPost({ ...post, color: event.target.value })} className="post-form__color-input" type="color" />
      </div>
    </form>
  );
}
