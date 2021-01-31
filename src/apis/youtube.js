import axios from 'axios';


const KEY = 'AIzaSyCzfZVztmfYKoo3Pe4JshNX97DzXpslsO0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})