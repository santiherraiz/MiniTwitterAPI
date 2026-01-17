import axios from 'axios';

export const twitterApi = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL || 'https://tw.navelsystems.com/api',
    headers: {
        'Content-Type': 'application/json',
    }
});