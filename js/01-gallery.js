import { galleryItems } from "./gallery-items.js";

const galleryWrapper = document.querySelector(".gallery");
const galleryMarkup = createGalleryItemsMarkup(galleryItems);
let modal;

galleryWrapper.addEventListener("click", onGalleryWrapperClick);

galleryWrapper.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map((galleryItem) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${galleryItem.original}">
          <img
            class="gallery__image"
            src="${galleryItem.preview}"
            data-source="${galleryItem.original}"
            alt="${galleryItem.description}"
          />
        </a>
        </div> `;
    })
    .join("");
}

function onGalleryWrapperClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const originalImgLink = event.target.dataset.source;
  const template = `<img src="${originalImgLink}" width="800" height="600">`;
  const modalOptions = {
    onClose: () => window.removeEventListener("keydown", onModalclose),
  };

  modal = basicLightbox.create(template, modalOptions);
  modal.show();

  window.addEventListener("keydown", onModalclose);
}

function onModalclose(event) {
  if (modal && event.keyCode === 27) {
    modal.close();
  }
}
