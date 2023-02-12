import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { Feed } from '../Feed/Feed';
import Guardian from '../../util/Guardian';
import { useState } from 'react';

export function App() {
  const [articles, setArticles] = useState([]);
  const [term, setTerm] = useState('');
  const [displayTerm, setDisplayTerm] = useState(false);

  const search = async (term) => {
    try {
      const searchResults = await Guardian.search(term);
      setArticles(searchResults);
    } catch (error) {
      console.error(error);
    }
  };

  const handleTermChange = (e) => {
    setTerm(e.target.value);
    e.preventDefault();
  };

  const handleButtonClick = () => {
    setDisplayTerm(true);
  };

  return (
    <div>
      <h1>
        <span className="highlight">The </span>Guardian
      </h1>
      <div className="App">
        <SearchBar
          getArticles={search}
          onSearch={search}
          handleTermChange={handleTermChange}
          term={term}
          handleButtonClick={handleButtonClick}
        />
        {displayTerm && <h2>Showing results for {term} </h2>}
        <Feed articles={articles} />
      </div>
    </div>
  );
}
