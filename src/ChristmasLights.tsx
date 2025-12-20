import './ChristmasLights.css'

function ChristmasLights() {
  const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'cyan']
  const lightsCount = 30

  return (
    <>
      {/* Top lights */}
      <div className="lights-container top">
        <div className="lights-wire"></div>
        {Array.from({ length: lightsCount }).map((_, index) => (
          <div
            key={`top-${index}`}
            className="light-bulb"
            style={{
              left: `${(index / lightsCount) * 100}%`,
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <div className={`bulb ${colors[index % colors.length]}`}></div>
            <div className="bulb-cap"></div>
            <div className="wire-hang"></div>
          </div>
        ))}
      </div>

      {/* Left side lights */}
      <div className="lights-container left">
        <div className="lights-wire vertical"></div>
        {Array.from({ length: 15 }).map((_, index) => (
          <div
            key={`left-${index}`}
            className="light-bulb vertical"
            style={{
              top: `${(index / 15) * 100}%`,
              animationDelay: `${index * 0.15}s`,
            }}
          >
            <div className={`bulb ${colors[index % colors.length]}`}></div>
            <div className="bulb-cap"></div>
            <div className="wire-hang horizontal"></div>
          </div>
        ))}
      </div>

      {/* Right side lights */}
      <div className="lights-container right">
        <div className="lights-wire vertical"></div>
        {Array.from({ length: 15 }).map((_, index) => (
          <div
            key={`right-${index}`}
            className="light-bulb vertical"
            style={{
              top: `${(index / 15) * 100}%`,
              animationDelay: `${index * 0.15 + 0.5}s`,
            }}
          >
            <div className={`bulb ${colors[(index + 2) % colors.length]}`}></div>
            <div className="bulb-cap"></div>
            <div className="wire-hang horizontal"></div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ChristmasLights

