export default function home_nav() {
  const nav_btn = document.querySelector('#nav_btn_home');
  const nav = document.querySelector('nav');

  if (nav_btn) {
    nav_btn.addEventListener('click', () => {
      let nav_pos = nav.classList;
      if (nav_pos == 'close_nav') {
        nav.className = 'open_nav';
        nav_btn.className = 'nav_btn btn_close';
      } else {
        nav_btn.className = 'nav_btn btn_open';
        nav.className = 'close_nav';
      }
    })
  }



}


