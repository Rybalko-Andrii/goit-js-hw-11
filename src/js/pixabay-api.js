import axios from 'axios';

const API_KEY = '48820894-4cea1e59d649a954e9231553f';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });

    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
}
