import './App.css'

function App() {
  return (
    <div className="app">
      <div className="snowflakes">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="snowflake">❄</div>
        ))}
      </div>
      <h1 className="christmas-title">🎄 Merry Christmas! 🎄</h1>
      <p className="christmas-subtitle">Wishing you joy and happiness this holiday season</p>
      <div className="ornaments">
        <span className="ornament">🔴</span>
        <span className="ornament">🟢</span>
        <span className="ornament">🔴</span>
        <span className="ornament">🟢</span>
        <span className="ornament">🔴</span>
      </div>
    </div>
  )
}

export default App
