import axios from 'axios';
const api= axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3001', // Fallback al backend local
    headers: {
        'Content-Type': 'application/json', // Set the content type to JSON
    },
    timeout: 15000, // Set a timeout for requests (in milliseconds)
});
export default api;