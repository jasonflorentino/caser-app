import "./Stats.scss";

export default function Stats({ len, words, lines }) {
  return(
    <p className="Stats">
      <span className="Stats__stat">
          <span className="Stats__num">{len}</span> Char{len === 1 ? "" : "s"}
      </span>
      <span className="Stats__stat">
        <span className="Stats__num">{words}</span> Word{words === 1 ? "" : "s"}
      </span>
      <span className="Stats__stat">
        <span className="Stats__num">{lines}</span> Line{lines === 1 ? "" : "s"}
      </span>
    </p>
  )
}
