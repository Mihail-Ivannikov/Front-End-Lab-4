function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
  
    let randomColor =
      "#" +
      red.toString(16).padStart(2, "0") +
      green.toString(16).padStart(2, "0") +
      blue.toString(16).padStart(2, "0");
  
    let oppositeRed = 255 - red;
    let oppositeGreen = 255 - green;
    let oppositeBlue = 255 - blue;
  
    let oppositeColor =
      "#" +
      oppositeRed.toString(16).padStart(2, "0") +
      oppositeGreen.toString(16).padStart(2, "0") +
      oppositeBlue.toString(16).padStart(2, "0");
  
    return {
      background: randomColor,
      text: oppositeColor,
    };
  }
  
  const element = document.getElementById("9-element");
  const nextElement = document.querySelector(".favourite-films");
  
  element.addEventListener("click", () => {
    const colors = getRandomColor();
    element.style.backgroundColor = colors.background;
    element.style.color = colors.text;
  });
  
  nextElement.addEventListener("click", () => {
    const colors = getRandomColor();
    nextElement.style.backgroundColor = colors.background;
    nextElement.style.color = colors.text;
  });
  
  function zoomin() {
    const images = document.querySelectorAll("img");
    const imageWidth = images[images.length - 1].offsetWidth;
    images[images.length - 1].style.width = String(imageWidth * 1.1) + "px";
    images[images.length - 1].style.marginLeft = "";
  }
  
  function zoomout() {
    const images = document.querySelectorAll("img");
    const imageWidth = images[images.length - 1].offsetWidth;
    images[images.length - 1].style.width = String(imageWidth / 1.1) + "px";
  }
  
  function add() {
    const imageContainer = document.querySelector(".image-container");
    const image = document.createElement("img");
    image.src = "https://triplook.me/media/resorts/photo/b/8/b58.jpg";
    image.alt = "image";
    const aElement = document.createElement("a");
    aElement.href =
      "https://uk.wikipedia.org/wiki/%D0%9C%D0%BE%D0%BD%D1%82%D0%B5%D0%B2%D1%96%D0%B4%D0%B5%D0%BE";
    aElement.appendChild(image);
    imageContainer.appendChild(aElement);
  }
  
  function remove() {
    const images = document.querySelectorAll("img");
    images[images.length - 1].remove();
  }