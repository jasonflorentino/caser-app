import "./input.scss"

const Input = ({ text, inputHandler }) => {
  return (
    <section className="Input">
      <header className="Input__header">
        <h2 className="Input__title">Paste your text here</h2>
        <p className="Input__stats">1234/10,000 Chars • 123 Words • 5 Lines</p>
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