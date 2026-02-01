const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const btnArea = document.querySelector(".btn-area");

// YES button
yesBtn.addEventListener("click", () => {
  message.textContent = "Mujhe pata tha ab aa jao momos khilata hu 😄❤️";
});

// NO button move logic (container ke andar hi)
function moveNoButton() {
  const areaWidth = btnArea.offsetWidth;
  const areaHeight = btnArea.offsetHeight;

  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = areaWidth - btnWidth;
  const maxY = areaHeight - btnHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

// Desktop
noBtn.addEventListener("mouseenter", moveNoButton);

// Mobile
noBtn.addEventListener("touchstart", moveNoButton);
noBtn.addEventListener("click", moveNoButton);
