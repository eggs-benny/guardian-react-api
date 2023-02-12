import './SearchBar.css'
import { useState } from 'react'


export function SearchBar({ getArticles, onSearch }) {
  const [term, setTerm] = useState('')
  
  const search = () => {
    onSearch(term)
  }

  const handleTermChange = (e) => {
    setTerm(e.target.value);
    };
  

  return (
    <div className="SearchBar">
      <input placeholder="Search for a topic" onChange={handleTermChange} />
      <button className="Button" onClick={search}>SEARCH</button>
      <button className="Button" onClick={getArticles}>
        REFRESH FEED
      </button>
    </div>
  );
}