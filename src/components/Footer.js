import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="Footer">
      <h2 className="Footer__heading">
        Made with
        <span className="Footer__heart">
          ❤️
        </span>
        by 
        <a 
          className="Footer__name Footer__link" 
          href="https://github.com/jasonflorentino" 
          target="_blank" 
          rel="noreferrer"
        >
          Jason
        </a>
      </h2>
      <h2 className="Footer__heading">
        <a
          className="Footer__link" 
          href="https://github.com/jasonflorentino/caser-app" 
          target="_blank" 
          rel="noreferrer"
        >
          View on GitHub
        </a>
      </h2>
    </footer>
  )
}
