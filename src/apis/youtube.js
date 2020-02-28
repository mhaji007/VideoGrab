import axios from 'axios';

// const KEY = 'AIzaSyD7dLmQnwU9R6zqFM2DgSYPl8HC2XHQPs';

const KEY = 'AIzaSyBXAyimeyDQaq0xckMpjEG4NzYGJR_XTbg'

// Make a preconfigured instance of axios with base URL and default parameters

 
export const baseParams = { 
 part: "snippet",
 maxResults: 5,
 type: "video",
 key: `${KEY}` };

export default axios.create({     
 baseURL: 'https://www.googleapis.com/youtube/v3' 
})