import React from 'react';
import './RSelect.scss';

export default function RSelect({ options, sortPosts, selectedSort }) {
  return (
    <select
      name="select-filter-posts"
      onChange={(event) => sortPosts(event.target.value)}
      className="select"
      value={selectedSort.value}
    >
      <option value={selectedSort.value} disabled hidden>
        {selectedSort.name}
      </option>
      { options.map((option) => (
        <option value={option.value} key={option.value}>{option.name}</option>
      ))}
    </select>
  );
}
