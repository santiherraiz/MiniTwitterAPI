import { api } from "@/core/api/twitter-api";

export const createPostAction = async (content: string) => {
    try {
        const { data } = await api.post('/posts', { content });
        return data;
    } catch (error) {
        throw new Error('Error al crear el post');
    }
};