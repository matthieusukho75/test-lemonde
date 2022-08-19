const carouselContainer = document.getElementById("carousel");
const slide = document.querySelector(".item_carousel");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
const showMore = document.getElementById("show_more_btn");
const showFirstItem = document.getElementById("first_hidded_item")
const showSecondItem = document.getElementById("second_hidded_item")

nextButton.addEventListener("click", () => {
  prevButton.classList.add('btn_arrow')
  prevButton.classList.remove('btn_arrow_inactive')
  nextButton.classList.add('btn_arrow_inactive')
  carouselContainer.scrollLeft += carouselContainer.scrollWidth;
});

prevButton.addEventListener("click", () => {
  nextButton.classList.add('btn_arrow')
  nextButton.classList.remove('btn_arrow_inactive')
  prevButton.classList.add('btn_arrow_inactive')
  carouselContainer.scrollLeft -= carouselContainer.scrollWidth;
});

showMore.addEventListener("click", () => {
  showFirstItem.classList.remove("hidden")
  showSecondItem.classList.remove("hidden")
  showMore.classList.add("hidden")
})