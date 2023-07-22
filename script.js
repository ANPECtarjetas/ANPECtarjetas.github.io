function handleClick() {
  const confettiContainer = document.getElementById("confetti");
  const confettiPiece = document.createElement("div");
  confettiPiece.classList.add("confetti-piece");
  confettiContainer.appendChild(confettiPiece);
  setTimeout(() => {
    confettiContainer.removeChild(confettiPiece);
  }, 3000);
}
