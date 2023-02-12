import './Article.css';

export function Article({ headline, date, image, byline, url }) {
  const time = new Date(date);
  return (
    <div className="Article">
      <div className="Article-image">
        <img src={image} alt="guardian article"/>
      </div>
      <div className="Article-content">
        <a target="_blank" href={url} rel="noreferror noreferrer">
          <h3>{headline}</h3>
        </a>
        <p>
          Published by {byline} at {time.toLocaleTimeString().slice(0, 5)} on{' '}
          {time.toDateString()}
        </p>
      </div>
    </div>
  );
}
