import "./case.scss"

const Case = ({ name, text }) => {
  return (
    <section className="Case">
      <h3 className="Case__name">{ name }</h3>
      <textarea
        className="Case__textarea"
        type="text"
        name={ name }
        value={ text }
        readOnly>
      </textarea>
    </section>
  )
}

export default Case;