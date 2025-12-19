import { useEffect, useState } from 'react'
import './Snow.css'

interface Snowflake {
  id: number
  left: number
  animationDuration: number
  animationDelay: number
  size: number
}

function Snow() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([])

  useEffect(() => {
    const generateSnowflakes = () => {
      const flakes: Snowflake[] = []
      const flakeCount = 300

      for (let i = 0; i < flakeCount; i++) {
        flakes.push({
          id: i,
          left: Math.random() * 100,
          animationDuration: Math.random() * 3 + 2, // 2-5 seconds
          animationDelay: Math.random() * 5,
          size: Math.random() * 35 + 15, // 15-50px
        })
      }

      setSnowflakes(flakes)
    }

    generateSnowflakes()
  }, [])

  return (
    <div className="snow-container">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            animationDuration: `${flake.animationDuration}s`,
            animationDelay: `${flake.animationDelay}s`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
          }}
        />
      ))}
    </div>
  )
}

export default Snow

