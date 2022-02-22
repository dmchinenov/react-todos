import React from 'react';
import './RButton.scss';

export default function Button({ children, ...props }) {
  return (
    <button type="button" {...props} className="button">{children}</button>
  );
}
