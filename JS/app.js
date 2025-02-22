document.querySelector(".card").addEventListener("click", function () {
  const textElement = this.querySelector(".text");

  if (this.classList.contains("expanded")) {
    // If already expanded, shrink back
    this.classList.remove("scale-to-center");
    this.classList.add("move-to-top");

    setTimeout(() => {
      this.classList.remove("move-to-top");
      this.classList.remove("expanded");
      textElement.classList.add("fade"); // Fade out text first

      setTimeout(() => {
        textElement.innerHTML = "Happy<br />Anniversary<br />Day!"; // Change text
        textElement.style.color = "#003049";
        textElement.classList.remove("fade"); // Fade in new text
      }, 400); // Wait for fade-out before changing text
    }, 500);
  } else {
    // Expand card
    this.classList.add("expanded");
    textElement.classList.add("fade"); // Fade out first text

    setTimeout(() => {
      textElement.innerHTML = "I love YOU!";
      textElement.style.color = "#f08080";
      textElement.classList.remove("fade"); // Fade in new text
      this.classList.add("scale-to-center"); // Scale card after text swap
    }, 600);
  }
});

window.addEventListener("load", function () {
  const preloader = document.querySelector(".preloader");
  const numberElement = document.querySelector(".preloader-number");

  let count = 0;
  const interval = setInterval(() => {
    count++;
    numberElement.textContent = count;

    if (count === 7) {
      numberElement.style.fontSize = "160px";
      numberElement.style.color = "#f08080";
    }

    if (count === 7) {
      clearInterval(interval);
    }
  }, 500);

  setTimeout(function () {
    preloader.classList.add("fade-out");
  }, 5000);
});

document.addEventListener("DOMContentLoaded", function () {
  const gifContainer = document.querySelector(".flying-gifs");
  const gifFiles = [
    "1.gif",
    "2.gif",
    "4.gif",
    "5.gif",
    "6.gif",
    "7.gif",
    "9.gif",
    "10.gif",
    "11.gif",
  ]; // Add more if needed
  const radius = 200; // Distance from valentines
  const centerX = 200; // Center of valentines-container
  const centerY = 200;

  gifFiles.forEach((gifFile, index) => {
    let angle = (index / gifFiles.length) * 360; // Evenly distribute GIFs
    let gif = document.createElement("img");
    gif.src = `./GIF/${gifFile}`;

    // Make only "6.gif" bigger
    if (gifFile === "6.gif") {
      gif.style.width = "100px"; // Increase size
      gif.style.height = "100px"; // Adjust proportionally
    } else {
      gif.style.width = "50px"; // Default size for others
      gif.style.height = "50px";
    }

    // Positioning and animation
    gif.style.position = "absolute";
    gif.style.left = `${
      centerX + radius * Math.cos(angle * (Math.PI / 180))
    }px`;
    gif.style.top = `${centerY + radius * Math.sin(angle * (Math.PI / 180))}px`;
    gif.style.animationDuration = `${Math.random() * 3 + 3}s`; // Random speed

    gifContainer.appendChild(gif);
  });
});
