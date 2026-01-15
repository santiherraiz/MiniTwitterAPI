import api from '../../services/api';
import { Post } from '@/types/post';
import { useState } from 'react';

 const fetchPosts = async () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchPosts = async () => {
        try {
            const response = await api.get('/posts'); 
            setPosts(response.data);
        } catch (error) {
            console.error("Error cargando el feed:", error);
        } finally {
            setLoading(false);
        }
    };
};