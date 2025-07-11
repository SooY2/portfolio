const texts = document.querySelectorAll('.strength-text');
console.log(texts);
const icons = document.querySelectorAll('#strength-icons .icon');
const triggers = document.querySelectorAll('.trigger-zone');

function activate(index) {
  texts.forEach((el, i) => el.classList.toggle('active', i === index));
  icons.forEach((el, i) => el.classList.toggle('active', i === index));
}

const strengthObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const index = Number(entry.target.dataset.index);
      activate(index);
    }
  });
}, {
  root: null,
  threshold: 0.5,
});

triggers.forEach(trigger => strengthObserver.observe(trigger));
activate(0);