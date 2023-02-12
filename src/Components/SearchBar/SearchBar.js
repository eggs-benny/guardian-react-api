import React from 'react'
import './SearchBar.css'

export function SearchBar({ getArticles }) {
  return (
    <div className="SearchBar">
      <input placeholder="Search for a topic" />
      <button className="Button">SEARCH</button>
      <button className="Button" onClick={getArticles}>
        REFRESH FEED
      </button>
    </div>
  );
}