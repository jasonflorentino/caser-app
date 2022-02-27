import "./Stats.scss";

const Stats = ({ len, words, lines }) => {
  return(
    <p className="Stats">
      <span className="Stats__stat">
          <span className="Stats__num">{len}</span> Char{len===1?null:"s"}
      </span>
      <span className="Stats__stat">
        <span className="Stats__num">{words}</span> Word{words===1?null:"s"}
      </span>
      <span className="Stats__stat">
        <span className="Stats__num">{lines}</span> Line-break{lines===1?null:"s"}
      </span>
    </p>
  )
}

export default Stats;