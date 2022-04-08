const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");
btn.addEventListener('click', () => {
  randomNumber = randomNumberGenerator();
  color.textContent = colors[randomNumber];
  document.body.style.backgroundColor = colors[randomNumber];
});

const randomNumberGenerator = () => {
  return Math.floor(Math.random() * colors.length);
};
