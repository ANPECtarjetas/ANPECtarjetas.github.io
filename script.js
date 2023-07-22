ddocument.addEventListener("click", createConfetti);
document.addEventListener("touchstart", createConfetti);

function createConfetti() {
  const confettiContainer = document.createElement("div");
  confettiContainer.classList.add("confetti-container");
  document.body.appendChild(confettiContainer);

  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.backgroundColor = getRandomColor();
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
    confettiContainer.appendChild(confetti);
  }

  setTimeout(function() {
    confettiContainer.remove();
  }, 5000);
}

function getRandomColor() {
  const colors = ["#f7e6de", "#f9eae1", "#fcefe6", "#f3d6c5", "#f0d1c2", "#f9e2d2"];
  return colors[Math.floor(Math.random() * colors.length)];
}
