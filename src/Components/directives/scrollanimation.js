/*
  Using the IntersectionObserver
  Observers are objects that spots something in real-time.
  And there are different observers, which spots different things, 
  like the MutationObserver, where you can look for changes in the DOM, 
  for example. And we need in this case the IntersectionObserver.
*/
const animatedScrollObserver = new IntersectionObserver((entries, animatedScrollObserver) => {
  /*
      Looping through all entries, which are observed.
    */
  entries.forEach((entry) => {
    /*
        With this condition, we check whether the element is in the current viewport, 
        respectively if the entry intersects with the viewport.
        If true, then we add the enter class and call the unobserve function.
        Because we don’t have to observe it anymore.
      */
    if (entry.isIntersecting) {
      entry.target.classList.add('enter')
      animatedScrollObserver.unobserve(entry.target)
    }
  })
})

export default {
  mounted(el) {
    el.classList.add('before-enter')
    animatedScrollObserver.observe(el)
  }
}
