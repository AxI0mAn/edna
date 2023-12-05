export default function animat_visibl_scroll() {
  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('scroll_visible');
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.start_hidden');
  for (let elm of elements) {
    observer.observe(elm);
  }
}