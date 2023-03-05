import { galleryItems } from "./gallery-items.js";
// Change code below this line
const imageContainer = document.querySelector(".gallery");
function getAllImages(items) {
  return items
    .map(({ description, preview, original }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
         alt="${description}"
        />
     </a>
    </div>`;
    })
    .join("");
}
const allImages = getAllImages(galleryItems);
imageContainer.insertAdjacentHTML("afterbegin", allImages);
imageContainer.addEventListener("click", (event) => {
  event.preventDefault();
  const img = event.target;
  const largeImg = img.dataset.source;
  const nameImg = img.alt;
  const link = document.querySelectorAll(".gallery__link");
  link.forEach((ref) => {
    const modaleImg = `<img class = "gallery__image data-source = "${largeImg}" alt = "${nameImg}" src = "${ref.href}">`;
    if (ref.href !== largeImg) {
      return;
    }
    basicLightbox.create(modaleImg).show();
  });
});
