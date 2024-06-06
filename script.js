document.addEventListener("DOMContentLoaded", () => {
  const frames = document.querySelectorAll(".image-frame");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  let currentIndex = 0;

  function updateGallery() {
    frames.forEach((frame, index) => {
      frame.style.display = index === currentIndex ? "flex" : "none";
    });
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + frames.length) % frames.length;
    updateGallery();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % frames.length;
    updateGallery();
  });

  // Initialize gallery
  updateGallery();
});
