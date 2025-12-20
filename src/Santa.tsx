import './Santa.css'

function Santa() {
  return (
    <div className="santa-container">
      <div className="speech-bubble">
        <div className="bubble-text">Ho Ho Ho!</div>
        <div className="bubble-tail"></div>
      </div>
      <div className="santa">
        <div className="santa-head">
          <div className="santa-hat">
            <div className="hat-top"></div>
            <div className="hat-pom"></div>
          </div>
          <div className="santa-face">
            <div className="eyes">
              <div className="eye left"></div>
              <div className="eye right"></div>
            </div>
            <div className="nose"></div>
            <div className="beard">
              <div className="mustache"></div>
            </div>
          </div>
        </div>
        <div className="santa-body">
          <div className="belt">
            <div className="buckle"></div>
          </div>
          <div className="arm left-arm waving">
            <div className="hand">👋</div>
          </div>
          <div className="arm right-arm"></div>
        </div>
        <div className="legs">
          <div className="leg left-leg"></div>
          <div className="leg right-leg"></div>
        </div>
      </div>
    </div>
  )
}

export default Santa

