import { api } from "@/core/api/twitter-api";
import { PostMapper } from "@/infrastructure/interfaces/mappers/post.mapper";
import { TwitterPostResponse } from "@/infrastructure/interfaces/twitter-responses";

export const getPostsAction = async () => {
    try {
        const { data } = await api.get<TwitterPostResponse[]>('/posts');
        return data.map(PostMapper.fromTwitterToPost);
    } catch (error) {
        throw new Error('Error al cargar los posts');
    }
};

export const getUserPostsAction = async (userId: string) => {
    try {
        const { data } = await api.get<TwitterPostResponse[]>(`/users/${userId}/posts`);
        return data.map(PostMapper.fromTwitterToPost);
    } catch (error) {
        throw new Error('Error al cargar los posts del usuario');
    }
};

export const getRepliesAction = async (postId: string) => {
    try {
        const { data } = await api.get<TwitterPostResponse[]>(`/posts/${postId}/replies`);
        return data.map(PostMapper.fromTwitterToPost);
    } catch (error) {
        throw new Error('Error al cargar las respuestas');
    }
};