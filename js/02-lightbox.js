import { galleryItems } from "./gallery-items.js";

const galleryWrapper = document.querySelector(".gallery");
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

galleryWrapper.insertAdjacentHTML("beforeend", galleryMarkup);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map((galleryItem) => {
      return `<a class="gallery__item" href="${galleryItem.original}">
      <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
    </a> `;
    })
    .join("");
}
