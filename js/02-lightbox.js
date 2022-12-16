import { galleryItems } from "./gallery-items.js";

const galleryWrapper = document.querySelector(".gallery");
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

galleryWrapper.addEventListener("click", onGalleryWrapperClick);

galleryWrapper.insertAdjacentHTML("beforeend", galleryMarkup);

const modal = new SimpleLightbox(".gallery a", {
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

function onGalleryWrapperClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  window.addEventListener("keydown", onModalclose);
}

function onModalclose(event) {
  if (modal && event.keyCode === 27) {
    modal.close();
  }
}
