import Stats from "./Stats";
import "./Input.scss"

export default function Input({ text, inputHandler, textSetters }) {

  const { pasteLoremIpsum, pastePangrams, clearInput } = textSetters;
  
  const countWords = (str) => {
    let words = 0;
    let newLines = 0;
    let inWord = false;
    let i = 0;

    while(i<str.length) 
    {
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
        <h2 className="Input__title">Put your text here</h2>
        <div className="Input__details">
          <Stats len={text.length} words={words} lines={lines} />
          <button className="Input__button--tablet" onClick={clearInput}>Clear</button>
          <button className="Input__button--tablet" onClick={pasteLoremIpsum}>Paste Lorem Ipsum</button>
          <button className="Input__button--tablet" onClick={pastePangrams}>Paste Pangrams</button>
        </div>
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
      <button className="Input__button--mobile" onClick={pasteLoremIpsum}>Paste Lorem Ipsum</button>
      <button className="Input__button--mobile" onClick={pastePangrams}>Paste Pangrams</button>
      <button className="Input__button--mobile" onClick={clearInput}>Clear</button>
    </section>
  )
}
