import './Feed.css';
import { Article } from '../Article/Article';

export function Feed({ articles }) {
  return (
    <div className="Feed">
      {articles !== [] && articles.length > 0 ? (
        articles.map((article) => {
          return (
            <Article
              key={article.id}
              headline={article.headline}
              image={article.image}
              date={article.date}
              byline={article.byline}
              url={article.url}
            />
          );
        })
      ) : (
        <div>
          <p>Click to refresh feed</p>
        </div>
      )}
    </div>
  );
}
