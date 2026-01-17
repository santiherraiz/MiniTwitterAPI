import { api } from "@/core/api/twitter-api";

export const toggleLikeAction = async (postId: string) => {
    try {
        const { data } = await api.post(`/posts/${postId}/like`);
        return data;
    } catch (error) {
        throw new Error('Error al dar like');
    }
};

export const toggleRetweetAction = async (postId: string) => {
    try {
        const { data } = await api.post(`/posts/${postId}/retweet`);
        return data;
    } catch (error) {
        throw new Error('Error al retweetear');
    }
};

export const toggleBookmarkAction = async (postId: string) => {
    try {
        const { data } = await api.post(`/posts/${postId}/bookmark`);
        return data;
    } catch (error) {
        throw new Error('Error al guardar');
    }
};