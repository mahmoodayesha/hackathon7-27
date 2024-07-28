import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api'; // Updated to match your backend URL

export const fetchEvents = async (lat, long) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/events/geopoint?lat=${lat}&long=${long}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching events:', error.message);
        throw error;
    }
};
