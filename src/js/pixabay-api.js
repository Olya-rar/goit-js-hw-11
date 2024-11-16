const API_KEY = '47106635-e689f78aea9055419384fac8a';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
  const response = await fetch(
    `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`
  );
  if (!response.ok) throw new Error('Failed to fetch images');
  const data = await response.json();
  return data.hits;
}