const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
  const btn = document.createElement('button')
  btn.addEventListener('click', ()=> {
    stopSounds()
    document.getElementById(sound).play()
  })
  btn.classList.add('btn')
  btn.innerText = sound
  document.querySelector('.buttons').appendChild(btn)
})

function stopSounds() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound)

    song.pause()
    song.currentTime = 0

  })
}