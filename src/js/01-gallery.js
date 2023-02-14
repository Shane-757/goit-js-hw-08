// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items.js';

const imageList = document.querySelector('.gallery');

let imageGallery = creatImagesMarkup();

imageList.insertAdjacentHTML("afterbegin", imageGallery);

imageList.addEventListener("click", modal);

function creatImagesMarkup() {
  return galleryItems
  .map(
    element => 
        `<a class="gallery__link" href="${element.original}">
            <img
              class="gallery__image"
              src="${element.preview}"
              alt="${element.description}"
            />
          </a>`
          )
          .join("");
}

function modal(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return
  }
  var lightbox = new SimpleLightbox('.gallery a', {captionsData:"alt", captionDelay: 250, captionPosition: "bottom",});
    
  lightbox.on()
}  
