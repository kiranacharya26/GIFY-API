const apiKey = '2CRSaJMx0YzDN8ZgchTdVQtwCEdFj0TU'

const getGIF = async (text) => {
  const base = 'https://api.giphy.com/v1/gifs/search'
  const query = `?api_key=${apiKey}&q=${text}&limit=25&offset=0&rating=g&lang=en`

  const response = await fetch(base + query)
  const data = await response.json()

  return data
}
