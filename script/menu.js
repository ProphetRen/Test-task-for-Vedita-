export function menu() {
  const menuButton = document.querySelector('.menu')
  const drawer = document.querySelector('.drawer')

  menuButton.addEventListener('click', () => {
    if (!drawer.classList.contains('show')) {
      drawer.classList.add('show')
    } else {
      drawer.classList.remove('show')
    }
  })
}