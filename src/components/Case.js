import "./Case.scss"

export default function Case({ 
  name, 
  text, 
  optionName, 
  optionValue, 
  optionHandler, 
  wasCopied, 
  copyHandler,
 }) {

  const nameNoSpace = name.replace(/\s/g,'')
  
  return (
    <section className="Case">
      <header className="Case__header">
        <h3 className={`Case__name${wasCopied?"--copied":""}`}>{name}</h3>
        <button 
          className={`Case__copyButton${wasCopied ? "--copied" : ""}`} 
          onClick={copyHandler}
        >
          {wasCopied ? 'Copied!' : 'Copy'}
        </button>
      </header>
      {optionName && (
        <div className="Case__options">
          <input
            className="Case__checkbox"
            type="checkbox"
            id={nameNoSpace}
            name={nameNoSpace}
            checked={optionValue}
            onChange={optionHandler} 
          />
          <label className="Case__label" htmlFor={nameNoSpace}>{optionName}</label>
        </div>
      )}
      <textarea
        className="Case__textarea"
        type="text"
        name={name}
        value={text}
        readOnly>
      </textarea>
    </section>
  )
}
