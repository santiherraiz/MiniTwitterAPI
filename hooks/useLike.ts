import { useState } from "react";
import api from '../services/api';

export const useLike = (initialLikes: number, initialLiked: boolean, postId: string) => {
    const [nLikes, setNLikes] = useState(initialLikes);
    const [liked, setLiked] = useState(initialLiked);

    const toggleLike = async () => {
        const previousLiked = liked;
        const previousLikes = nLikes;

        setLiked(!liked);
        setNLikes(liked ? nLikes - 1 : nLikes + 1);

        try {
            await api.post(`/posts/${postId}/like`);
        } catch (error) {
            console.error("Error al dar like:", error);
            setLiked(previousLiked);
            setNLikes(previousLikes);
        }
    };

    return {
        nLikes,
        liked,
        toggleLike
    };
};