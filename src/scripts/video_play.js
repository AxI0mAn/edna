export default function video_play() {
  const vid = document.querySelector('video');
  const play_btn = document.querySelector('#play_btn');
  if (vid) {
    vid.addEventListener('click', () => {
      if (vid.paused) {
        vid.play();
        play_btn.classList.toggle('display_none');
      } else {
        vid.pause();
        play_btn.classList.toggle('display_none');
      }
    })
  }
  if (play_btn) {
    play_btn.addEventListener('click', () => {
      if (vid.paused) {
        vid.play();
        play_btn.classList.toggle('display_none');
      } else {
        vid.pause();
        play_btn.classList.toggle('display_none');
      }
    })
  }
}