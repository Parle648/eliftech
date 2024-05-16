import axios from 'axios';

export default async function getAllEvents(page: number) {
    try {
        const events = await axios(`http://localhost:3001/event/pages/${page}`);
    
        return events;
    } catch (error) {
        throw new Error('error')        
    }
};