import './Feed.css';
import { Article } from '../Article/Article';

export function Feed() {
  return (
    <div className="Feed">
      <Article />
      <Article />
      <Article />
      <Article />
    </div>
  );
}