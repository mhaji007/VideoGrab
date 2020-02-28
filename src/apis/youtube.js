import axios from 'axios';

const KEY = 'AIzaSyD7dLmQnwU9R6zqFM2DgSYPl8HC2XHQPs';

// Make a preconfigured instance of axios with base URL and default parameters
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: `${KEY}`
    }

});