
/* ------------------------------------------------
   Scroll-Based Sticky Canvas Animation
-------------------------------------------------- */

// Canvas setup
const canvas = document.getElementById("scroll-canvas");
const ctx = canvas.getContext("2d");

// Total number of frames
const frameCount = 200;

// Image path generator
const currentFrame = (index) =>
  `images/ezgif-frame-${index.toString().padStart(3, "0")}.jpg`;

// Set canvas size to viewport
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Preload images
const images = [];
let imagesLoaded = 0;

for (let i = 1; i <= frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  img.onload = () => imagesLoaded++;
  images.push(img);
}

// Draw image maintaining aspect ratio
function drawImageContain(img) {
  const canvasRatio = canvas.width / canvas.height;
  const imgRatio = img.width / img.height;

  let drawWidth, drawHeight, offsetX, offsetY;

  if (imgRatio > canvasRatio) {
    // Image is wider
    drawWidth = canvas.width;
    drawHeight = canvas.width / imgRatio;
    offsetX = 0;
    offsetY = (canvas.height - drawHeight) / 2;
  } else {
    // Image is taller
    drawHeight = canvas.height;
    drawWidth = canvas.height * imgRatio;
    offsetX = (canvas.width - drawWidth) / 2;
    offsetY = 0;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
}

// Render a specific frame
function renderFrame(index) {
  if (images[index]) drawImageContain(images[index]);
}

// Draw first frame once loaded
images[0].onload = () => renderFrame(0);

// Scroll handler
function onScroll() {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const scrollFraction = scrollTop / scrollHeight;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.floor(scrollFraction * frameCount)
  );

  requestAnimationFrame(() => renderFrame(frameIndex));
}

=======
/* ------------------------------------------------
   Scroll-Based Sticky Canvas Animation
-------------------------------------------------- */

// Canvas setup
const canvas = document.getElementById("scroll-canvas");
const ctx = canvas.getContext("2d");

// Total number of frames
const frameCount = 200;

// Image path generator
const currentFrame = (index) =>
  `images/ezgif-frame-${index.toString().padStart(3, "0")}.jpg`;

// Set canvas size to viewport
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Preload images
const images = [];
let imagesLoaded = 0;

for (let i = 1; i <= frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  img.onload = () => imagesLoaded++;
  images.push(img);
}

// Draw image maintaining aspect ratio
function drawImageContain(img) {
  const canvasRatio = canvas.width / canvas.height;
  const imgRatio = img.width / img.height;

  let drawWidth, drawHeight, offsetX, offsetY;

  if (imgRatio > canvasRatio) {
    // Image is wider
    drawWidth = canvas.width;
    drawHeight = canvas.width / imgRatio;
    offsetX = 0;
    offsetY = (canvas.height - drawHeight) / 2;
  } else {
    // Image is taller
    drawHeight = canvas.height;
    drawWidth = canvas.height * imgRatio;
    offsetX = (canvas.width - drawWidth) / 2;
    offsetY = 0;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
}

// Render a specific frame
function renderFrame(index) {
  if (images[index]) drawImageContain(images[index]);
}

// Draw first frame once loaded
images[0].onload = () => renderFrame(0);

// Scroll handler
function onScroll() {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const scrollFraction = scrollTop / scrollHeight;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.floor(scrollFraction * frameCount)
  );

  requestAnimationFrame(() => renderFrame(frameIndex));
}

>>>>>>> 8cdf64de99f78a1d60b0d25dd052563dedf02050
window.addEventListener("scroll", onScroll);