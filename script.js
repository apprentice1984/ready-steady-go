run()

function run() {
  setTimeout(() => {
    document.body.innerHTML = `<h2>GO</h2><button id="replay">Replay</button>`
    const replay = document.getElementById('replay')
    replay.addEventListener('click', (e) => {
      document.body.innerHTML = `<p class='counter'>3</p><p class='counter'>2</p><p class='counter'>1</p><p class='counter'>0</p><h3>GET READY!</h3>`
      run()
    })
  }, 4000)
}
