import React, { useState } from 'react';
import RButton from '../UI/RButton/RButton';
import RInput from '../UI/RInput/RInput';

export default function PostForm(props) {
  const [post, setPost] = useState({ title: '', desc: '' });
  const { createPost } = props;
  const addNewPost = (event) => {
    event.preventDefault();
    if (post.title === '' || post.desc === '') {
      return;
    }
    const newPost = {
      ...post,
      id: Date.now(),
    };
    createPost(newPost);
    setPost({ ...post, title: '', desc: '' });
  };

  return (
    <form className="app__form">
      <RInput value={post.title} onChange={(event) => setPost({ ...post, title: event.target.value })} placeholder="Введите название" />
      <RInput value={post.desc} onChange={(event) => setPost({ ...post, desc: event.target.value })} placeholder="Введите описание" />
      <RButton onClick={addNewPost}>Создать пост</RButton>
    </form>
  );
}
