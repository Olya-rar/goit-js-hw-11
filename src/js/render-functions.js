export function clearGallery() {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';
}

export function showLoadingIndicator() {
  const loader = document.getElementById('loader');
  loader.classList.remove('hidden');
}

export function hideLoadingIndicator() {
  const loader = document.getElementById('loader');
  loader.classList.add('hidden');
}

export function renderGallery(images) {
  const gallery = document.getElementById('gallery');
  const galleryMarkup = images.map(createGalleryItem).join('');
  gallery.innerHTML = galleryMarkup;
}

function createGalleryItem({ likes, views, comments, downloads, webformatURL, largeImageURL }) {
  return `
    <li class="gallery-item">
      <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="Image" class="gallery-image">
      </a>
      <div class="info-box">
        <div class="info-box-header">
          <div>Likes</div>
          <div>Views</div>
          <div>Comments</div>
          <div>Downloads</div>
        </div>
        <div class="info-box-values">
          <div>${likes}</div>
          <div>${views}</div>
          <div>${comments}</div>
          <div>${downloads}</div>
        </div>
      </div>
    </li>
  `;
}