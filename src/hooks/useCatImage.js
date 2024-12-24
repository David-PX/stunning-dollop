import { useEffect, useState } from 'react'
import { getURL } from '../services/facts'

export function useCatImage ({ fact }) {
  const [imageUrl, setImagenUrl] = useState()

  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3)
    const url = getURL(threeFirstWords)
    console.log(url)

    fetch(url)
      .then(res => {
        return res.json()
      })
      .then(response => {
        const { hits } = response
        console.log(hits)
        const image = hits.map(
          hits => hits.userImageURL
        )
        console.log()
        setImagenUrl(image[0])

        console.log(imageUrl)
      })
  }, [fact])

  return { imageUrl }
}
