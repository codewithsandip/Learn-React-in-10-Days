import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: 'AIzaSyAqYo9LDG8OCsYHfBkwJP-tu1KQSxBVq18'
    }
});