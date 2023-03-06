import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
function createGalleryMarkup(object) {
  return object
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
    </a>`;
    })
    .join("");
}
const allImages = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("afterbegin", allImages);
console.log(galleryItems);
const image = document.querySelector(".gallery__image");
const title = image.title;
var lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionPosition: "bottom",
  captionType: "attr",
  captionsData: "title",
  captionDelay: 250,
});
