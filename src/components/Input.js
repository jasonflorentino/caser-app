import Stats from "./Stats";
import "./Input.scss"

export default function Input({ text, inputHandler, textSetters }) {
  const { pasteLoremIpsum, pastePangrams, clearInput } = textSetters;

  const [words, lines] = countWords(text);

  return (
    <section className="Input">
      <header className="Input__header">
        <h2 className="Input__title">Put your text here</h2>
        <div className="Input__details">
          <Stats len={text.length} words={words} lines={lines} />
          <TabletButton onClick={clearInput}>Clear</TabletButton>
          <TabletButton onClick={pasteLoremIpsum}>Paste Lorem Ipsum</TabletButton>
          <TabletButton onClick={pastePangrams}>Paste Pangrams</TabletButton>
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
      <MobileButton onClick={pasteLoremIpsum}>Paste Lorem Ipsum</MobileButton>
      <MobileButton onClick={pastePangrams}>Paste Pangrams</MobileButton>
      <MobileButton onClick={clearInput}>Clear</MobileButton>
    </section>
  )
}

function TabletButton({ children, ...props }) {
  return <button className="Input__button--tablet" {...props}>{children}</button>
}

function MobileButton({ children, ...props }) {
  return <button className="Input__button--mobile" {...props}>{children}</button>
}

function countWords(str) {
  const lines = str.split("\n").filter((l) => !!l);
  const words = str.split(/\s/).filter((w) => !!w);
  return [words.length, lines.length];
}