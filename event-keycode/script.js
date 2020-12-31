const container = document.querySelector('.container')

window.addEventListener('keydown', (e)=>{
  container.innerHTML = `
  <div class="key">
  ${e.key === ' ' ? 'Space' : e.key}
  <small>key</small>
</div>
<div class="key">
  ${e.keyCode}
  <small>keycode</small>
</div>
<div class="key">
  ${e.code}
  <small>code</small>
</div>
  `
})