const $images = document.querySelectorAll(".main__works_content-item-image");
const $popup = document.querySelectorAll(".selector");
const $popupImg = document.querySelector(".modal__image");
const $closeButton = document.querySelector(".modal__close-button");
const $overlay = document.querySelector(".modal__overlay");
const $body = document.querySelector("body");

function closeImage(tag) {
  tag.addEventListener("click", () => {
    $popup.forEach((element) => {
      element.classList.add("hiden");
    });
    $body.classList.remove("hiden-scroll");
  });
}
closeImage($overlay);
closeImage($closeButton);

$images.forEach((image) => {
  image.addEventListener("click", () => {
    const imageSrc = image.getAttribute("src");
    $popupImg.setAttribute("src", imageSrc);
    $popup.forEach((element) => {
      element.classList.remove("hiden");
    });
    $body.classList.add("hiden-scroll");
  });
});
