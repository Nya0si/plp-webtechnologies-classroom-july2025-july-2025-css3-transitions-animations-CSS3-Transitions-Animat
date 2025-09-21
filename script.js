let isSpinning = false;
let colorIndex = 0; 

const colors = [
  "#ff0000",
   "#ff7f00",
    "#ffff00",
    "#00ff00",
     "#0000ff",
     "#4b0082",
      "#8b00ff" 
      ];

function changeBox(color, scale) {
  const box = document.getElementById("box");
  box.style.background = color;
  box.style.transform = `scale(${scale})`;
  return `Box changed to ${color} with scale ${scale}`;
}
function animateBox() {
   let currentColor = colors[colorIndex];
  let result = changeBox(currentColor, 1.3);

  console.log(result);

   colorIndex = (colorIndex + 1) % colors.length;
}
function toggleSpin() {
  const box = document.getElementById("box");
  if (isSpinning) {
    box.classList.remove("spin");
    isSpinning = false;
  } else {
    box.classList.add("spin");
    isSpinning = true;
  }
}