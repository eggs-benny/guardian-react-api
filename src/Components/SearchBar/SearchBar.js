import './SearchBar.css';

export function SearchBar({
  getArticles,
  onSearch,
  term,
  handleTermChange,
  handleButtonClick
}) {
  const search = () => {
    if (term !== '') {
      onSearch(term);
      handleButtonClick();
    }
  };

  const articles = () => {
    const term = '';
    getArticles(term);
  };

  return (
    <div className="SearchBar">
            <button className="Button" onClick={articles}>
        REFRESH HEADLINES
      </button>
      <input placeholder="Search for a topic" onChange={handleTermChange} />
      <button className="Button" onClick={search}>
        FILTER HEADLINES
      </button>
    </div>
  );
}
