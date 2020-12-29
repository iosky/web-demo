const loadingText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

const scale = (num, inMin, inMax, outMin, outMax) => {
  return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}

let load = 0
let int = setInterval(blurry, 30)

function blurry() {
  load++
  loadingText.innerText = `${load}%`
  if (load > 99) {
    clearInterval(int)
  }
  loadingText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}
