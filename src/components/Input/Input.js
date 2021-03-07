import "./input.scss"

const Input = ({ text, inputHandler }) => {

  const countWords = (str) => {
    let words = 0;
    let newLines = str.length ? 1 : 0;
    let inWord = false;
    let i = 0;
    while(i<str.length) {
      let c = str.charCodeAt(i)
      if (c === 10) newLines++;
      if (c <= 32) {
        inWord = false;
      } else if (inWord === false) {
        inWord = true;
        words++;
      }
      i++
    }
    return [words, newLines];
  }

  const [wordCount, lineCount] = countWords(text);

  return (
    <section className="Input">
      <header className="Input__header">
        <h2 className="Input__title">Paste your text here</h2>
        <p className="Input__stats">
          {text.length}/10,000 Chars • {wordCount} Word{wordCount===1?null:"s"} • {lineCount} Line{lineCount===1?null:"s"}¹
        </p>
      </header>
      <textarea
        className="Input__textarea"
        type="text"
        name="input"
        value={ text }
        onChange={ inputHandler }
        placeholder="Paste your text here"
        autoComplete="off">
      </textarea>
    </section>
  )
}

export default Input;