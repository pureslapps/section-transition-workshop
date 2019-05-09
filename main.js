let sections = document.getElementsByTagName("section");

window.addEventListener('scroll', function(){
  console.log('You are scrolling')
  if (window.scrollY > 5) {
    sections[0].classList.remove('hidden')
    sections[0].classList.add('show')
  }
  if (window.scrollY > 500) {
    sections[1].classList.remove('hidden')
    sections[1].classList.add('show')
  }
  if (window.scrollY > 1500) {
    sections[2].classList.remove('hidden')
    sections[2].classList.add('show')
  }
  if (window.scrollY > 2200) {
    sections[3].classList.remove('hidden')
    sections[3].classList.add('show')
  }
})
