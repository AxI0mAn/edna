export default function enough_action() {
  const elements = document.querySelectorAll('.enough_img');

  elements.forEach((item) => {
    if (item) {
      item.addEventListener('click', () => {
        let text = item.querySelector('.enough_message');
        item.classList.add('enough_activ');
        text.classList.add('text_show');
      })
    }

  })
}