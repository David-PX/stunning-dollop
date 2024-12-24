import './style.css'
import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <div>
        <h1>Random Images App</h1>
        <button onClick={handleClick}>Get New Fact</button>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={`${imageUrl}`} alt={`random generated image from the fact: ${fact}`} />}
      </div>
    </main>
  )
}
