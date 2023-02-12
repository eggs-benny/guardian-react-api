import './Feed.css';
import { Article } from '../Article/Article';

export function Feed({ articles }) {
  return (
    <div className="Feed">
      {articles !== [] && articles.length > 0 ? (
        articles.map((article) => {
          return (
            <Article
              headline={article.headline}
              date={article.date}
              key={article.id}
              image={article.image}
              url={article.url}
            />
          );
        })
      ) : (
        <div>
          <p>Click refresh feed</p>
        </div>
      )}
    </div>
  );
}
