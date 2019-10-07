import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 0c04478bc999f5ba652b642aae6e67a4203e2cd08bcf8f4be63c979e8af0f4ec'
      }
});