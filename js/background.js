const backgroundImg = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const bgimg = document.createElement("img");
const chooseImg =
  backgroundImg[Math.floor(Math.random() * backgroundImg.length)];

bgimg.src = `img/${chooseImg}`;

document.body.appendChild(bgimg);
