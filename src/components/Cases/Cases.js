import Case from "./Case";
import "./cases.scss"

const Cases = ({ text }) => {
  return (
    <section className="Cases">
      <header className="Cases__header">
        <h2 className="Cases__heading">Click to Copy</h2>
      </header>
      <main>
        <Case name={"Title Case"} text={text} />
      </main>
    </section>
  )
}

export default Cases;