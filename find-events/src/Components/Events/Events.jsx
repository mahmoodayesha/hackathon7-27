// src/components/Events.jsx
import React, { useState } from 'react';
import { fetchEvents } from '../../apiService';
import './Events.css';

const Events = () => {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [events, setEvents] = useState([]);
    const [error, setError] = useState('');

    const handleFetchEvents = async () => {
        try {
            const data = await fetchEvents(latitude, longitude);
            setEvents(data);
            setError('');
        } catch (err) {
            setError('Failed to fetch events. Please try again.');
        }
    };

    return (
        <div className="events-container">
            <h1>Find Events</h1>
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Latitude"
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Longitude"
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                />
                <button onClick={handleFetchEvents}>Get Events</button>
            </div>
            {error && <p className="error-message">{error}</p>}
            <div>
                {events.length > 0 ? (
                    <ul className="events-list">
                        {events.map((event) => (
                            <li key={event.id}>{event.name}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No events found.</p>
                )}
            </div>
        </div>
    );
};

export default Events;
