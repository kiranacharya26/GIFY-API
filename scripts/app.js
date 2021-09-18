const container = document.querySelector('.form-container')
const collectGIF = document.querySelector('.api-res-cont')
const closeButton = document.querySelector('.show')
// const gifDom = document.querySelector('.gif-dom')

const updateUI = (data) => {
  const gifData = data.gifData
  console.log(gifData)
  let html = ''

  gifData.data.map((query) => {
    html += `
      <img class="set-image" src=${query.images.original.url}  />
    `
  })
  collectGIF.innerHTML = html
}

const updateGIF = async (gif) => {
  const gifData = await getGIF(gif)

  return { gifData }
}

container.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputValue = container.inputKey.value.trim()
  container.reset()
  updateGIF(inputValue)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err))
})
collectGIF.addEventListener('click', (e) => {
  document.querySelector('.gif-dom').setAttribute('src', e.target.src)
})

closeButton.addEventListener('click', (e) => {
  if (!e.target) {
    container.classList.add('show')
  } else if (e.target) {
    container.classList.add('remove')
  }
})
