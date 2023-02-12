import './Feed.css';
import { Article } from '../Article/Article';

export function Feed({ articles }) {
  return (
    <div className="Feed">
      {articles.map((article) => {
        return <Article headline={article.headline} key={article.id} />;
      })}
    </div>
  );
}
