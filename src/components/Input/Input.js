import Stats from "./Stats";
import "./input.scss"

const Input = ({ text, inputHandler }) => {

  const countWords = (str) => {
    let words = 0;
    let newLines = 0;
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

  const [words, lines] = countWords(text);

  return (
    <section className="Input">
      <header className="Input__header">
        <h2 className="Input__title">Paste your text here</h2>
        <Stats len={text.length} words={words} lines={lines} />
      </header>
      <textarea
        className="Input__textarea"
        type="text"
        name="input"
        value={ text }
        onChange={ inputHandler }
        placeholder="Paste or type your text here"
        autoComplete="off">
      </textarea>
    </section>
  )
}

export default Input;