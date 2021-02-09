const $btn = document.querySelector('button')
const $nav = document.querySelector('#nav')

$btn.addEventListener('click', e => {
  $nav.classList.toggle('active')
  console.log('click');
})