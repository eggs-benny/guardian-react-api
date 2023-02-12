import './SearchBar.css'

export function SearchBar({ getArticles, onSearch, term, handleTermChange, handleButtonClick }) {
  
  const search = () => {
    onSearch(term)
  }

  const articles = () => {
    const term = ''
    getArticles(term)
  }
  

  return (
    <div className="SearchBar">
      <input placeholder="Search for a topic" onChange={handleTermChange} />
      <button className="Button" onClick={search && handleButtonClick}>SEARCH</button>
      <button className="Button" onClick={articles}>
        REFRESH HEADLINES
      </button>
    </div>
  );
}