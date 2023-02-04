const colorArray = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#00FFFF",
  "#FF00FF",
  "#C0C0C0",
  "#808080",
  "#000000",
  "#800000",
  "#008000",
  "#000080",
  "#808000",
  "#008080",
  "#800080",
];
const colorName = document.querySelector(".color-name");
const button = document.querySelector(".button");
const backGround = document.body;
let randColor;
button.addEventListener("click", () => {
  randColor = Math.floor(Math.random() * colorArray.length);
  backGround.style.background = colorArray[randColor];
  colorName.textContent = colorArray[randColor];
});
