import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { Feed } from '../Feed/Feed';

export function App() {
  return (
    <div className="App">
      <div>
        <h1>
          <span className="highlight">The</span>Guardian
        </h1>
        <div className="App">
          <SearchBar />
          <Feed />
        </div>
      </div>
    </div>
  );
}
