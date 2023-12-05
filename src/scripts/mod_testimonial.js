export default function mod_testimonial() {
  const cont = document.querySelector('#testimonials_content');
  const block = document.querySelector('#testimonial_case');
  const elem = document.querySelector('.folower')
  let current = 0;
  if (block) {
    elem.addEventListener('click', () => {
      current++;
      if (current >= 1) {
        block.className = 'testimonial_case show_vertical';
        cont.className = 'testimonials_content show_vertical';
      }
    })
  }
}