import "./style.css";

const imgs = document.getElementsByClassName("image");
const imgsContainer = document.getElementsByClassName("images");
let transformHeight = imgs[0].clientHeight - 30;

imgsContainer[0].style.transform = `translateX(${transformHeight}px)`;

document.getElementById("previous").addEventListener("click", () => {
  console.log(imgs[0].clientWidth * imgsContainer.length + 30);
  if (transformHeight === 530) return;
  transformHeight += imgs[0].clientWidth + 30;
  imgsContainer[0].style.transform = `translateX(${transformHeight}px)`;
});
document.getElementById("after").addEventListener("click", () => {
  if (transformHeight === -460) return;
  transformHeight -= imgs[0].clientWidth + 30;
  imgsContainer[0].style.transform = `translateX(${transformHeight}px)`;
});
