import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { Feed } from '../Feed/Feed';
import Guardian from '../../util/Guardian';
import { useState } from 'react';

export function App() {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    try {
      const articles = await Guardian.getArticles();
      setArticles(articles);
    } catch (error) {
      console.error(error);
    }
  };

  return (
      <div>
        <h1>
          <span className="highlight">The</span>Guardian
        </h1>
        <div className="App">
          <SearchBar getArticles={getArticles} />
          <Feed articles={articles} />
        </div>
      </div>
  );
}
