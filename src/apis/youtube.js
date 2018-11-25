import axios from 'axios';

const KEY = 'AIzaSyBg5yONgzXEJcB6OKPmpEdAzq3j1p7jXVM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
