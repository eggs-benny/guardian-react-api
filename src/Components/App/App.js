import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';

export function App() {
  return (
    <div className="App">
   <div>
  <h1><span className="highlight">The</span>Guardian</h1>
  <div className="App">
    <SearchBar/>
    <div className="Feed">
     Add the feed, which houses articles
    </div>
  </div>
</div>
    </div>
  );
}