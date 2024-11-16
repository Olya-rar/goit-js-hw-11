import { fetchImages } from './js/pixabay-api';
import { renderGallery, clearGallery, showLoadingIndicator, hideLoadingIndicator } from './js/render-functions';
import iziToast from 'izitoast';
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';

let lightbox = new SimpleLightbox('.gallery a');

const form = document.getElementById('search-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const query = event.target.elements.query.value.trim();
  if (!query) {
    iziToast.error({ message: 'Please enter a search term.' });
    return;
  }

  clearGallery();
  showLoadingIndicator();

  fetchImages(query)
    .then(images => {
      if (images.length === 0) {
        iziToast.warning({ message: 'Sorry, there are no images matching your search query. Please try again!' });
      } else {
        renderGallery(images);
        lightbox.refresh();
      }
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      iziToast.error({ message: 'An error occurred while fetching images. Please try again later.' });
    })
    .finally(() => {
      hideLoadingIndicator();
    });
});