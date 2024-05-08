/* 
    Author: Siqian Liu
	Date: Mar. 9, 2024
	Desc: Javascript used by project page for slideshow function.
*/

let index = 0;
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;

function updateCarousel() {
  items.forEach((item, idx) => {
    item.style.transform = `translateX(-${index * 100}%)`;
  });
}

//click on left privous button, go to previous slide
document
  .querySelector(".carousel-control-prev")
  .addEventListener("click", () => {
    if (index > 0) index--;
    else index = totalItems - 1;
    updateCarousel();
  });

//click on right next button, go to next slide
document
  .querySelector(".carousel-control-next")
  .addEventListener("click", () => {
    if (index < totalItems - 1) index++;
    else index = 0;
    updateCarousel();
  });

  
 // Automatic slideshow when no click on button
setInterval(() => {
  if (index < totalItems - 1) index++;
  else index = 0;
  updateCarousel();
}, 5000);
