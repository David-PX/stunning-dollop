const RANDOM_CAT_FACT_ENDPOINT = 'https://catfact.ninja/fact'

const PIXABAY_URL = import.meta.env.VITE_PIXABAY_URL
const PIXABAY_APIKEY = import.meta.env.VITE_PIXABAY_APIKEY

export const getRandomFact = async () => {
  const res = await fetch(RANDOM_CAT_FACT_ENDPOINT)
  const data = await res.json()
  const { fact } = data
  return fact
}

export const getURL = (words) => {
  let urlString = ''
  const parameters = words.map(
    (word) => {
      urlString += `${word}+`
      return urlString
    }
  )
  return `${PIXABAY_URL}?key=${PIXABAY_APIKEY}&q=${parameters[2].substring(0, parameters[2].length - 1)}&image_type=photo`
}
