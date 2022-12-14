// Add imports above this line
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', onPictureClick);


const makePictures = picture => {
    const {preview, original, description} = picture
    return `
    <li>
        <a class="gallery__item" href='${original}'>
        <img class="gallery__image"
        src='${preview}'
        alt="'${description}'" />
        </a>
    </li>`
};

const makeGallery = galleryItems.map(makePictures)
                                .join('');

gallery.insertAdjacentHTML('beforeend', makeGallery);

let currentModalPicture;
let currentModalDescription;

function onPictureClick(evt) {
    evt.preventDefault();

    const galleryEl = evt.target.classList.contains('gallery__image');

    if (!galleryEl) {
        return
    }
    
    currentModalPicture = evt.target.src;
    currentModalDescription = evt.target.alt;
    
    console.log(currentModalPicture);
    console.log(currentModalDescription);

}   

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
});