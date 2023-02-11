import React from 'react'
import './SearchBar.css'

export function SearchBar() {
  return (
    <div className="SearchBar">
      <input placeholder="Search for a topic" />
      <button className="Button">SEARCH</button>
    </div>
  );
}