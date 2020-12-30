const $joke = document.getElementById('joke')

const $jokeBtn = document.getElementById('joke-btn')

$jokeBtn.addEventListener('click', generatJoke)
generatJoke()

async function generatJoke() {
  const config = {
    headers: {
      Accept: 'application/json'
    }
  }

  const res = await fetch('https://icanhazdadjoke.com', config)
  const data = await res.json()

  $joke.innerHTML = data.joke
}
