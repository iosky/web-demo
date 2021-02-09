const $tags = document.querySelector('.tags')
const $textarea = document.querySelector('textarea')

$textarea.addEventListener('keyup', e => {
  createTags(e.target.value)

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = ''
    }, 100)

    selectRandomTag()
  }
})

const createTags = input => {
  const tags = input
    .split(',')
    .filter(tag => tag.trim() !== '')
    .map(tag => tag.trim())
  $tags.innerHTML = ''
  tags.forEach(tag => {
    const $tag = document.createElement('span')
    $tag.classList.add('tag')
    $tag.innerText = tag
    $tags.appendChild($tag)
  })
}

const selectRandomTag = () => {
  const times = 30

  const interval = setInterval(() => {
    const tag = pickRandomTag()
    highlight(tag)

    setTimeout(() => {
      unHighlight(tag)
    }, 100)
  }, 100)

  setTimeout(() => {
    clearInterval(interval)
    const tag = pickRandomTag()
    highlight(tag)
  }, times * 100)
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random() * tags.length)]
}

function highlight(tag) {
  tag.classList.add('highlight')
}

function unHighlight(tag) {
  tag.classList.remove('highlight')
}
