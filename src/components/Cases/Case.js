import "./case.scss"

const Case = ({ name, text, optionName, optionValue, optionHandler, wasCopied, copyHandler }) => {

  const nameNoSpace = name.replace(/\s/g,'')
  
  return (
    <section className="Case">
      <header className="Case__header">
        <h3 className={`Case__name${wasCopied?"--copied":""}`} onClick={copyHandler}>{ name }</h3>
        {wasCopied ? <span className="Case__copied">Copied!</span> : null}
        {!!optionName ? 
        <>
          <input
            className="Case__checkbox"
            type="checkbox"
            id={nameNoSpace}
            name={nameNoSpace}
            checked={optionValue}
            onChange={optionHandler} />
          <label className="Case__label" htmlFor={nameNoSpace}>{optionName}</label>
        </>
        : null}
      </header>
      <textarea
        className="Case__textarea"
        type="text"
        name={ name }
        value={ text }
        onClick={copyHandler}
        readOnly>
      </textarea>
    </section>
  )
}

export default Case;