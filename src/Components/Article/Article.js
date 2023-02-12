import './Article.css';
import image from './Example-Image.png'

export function Article() {
  return (
    <div className="Article">
      <div className="Article-content">
          <img src={image} alt="Serena Williams" height="300" />
        <h2>Serena Williams Headline</h2>
        <p>
          Published at 12:56:01 on 11.02.2023
        </p>
      </div>
    </div>
  );
}
