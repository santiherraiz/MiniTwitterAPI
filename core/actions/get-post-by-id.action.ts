import { api } from "@/core/api/twitter-api";
import { PostMapper } from "@/infrastructure/interfaces/mappers/post.mapper";
import { TwitterPostResponse } from "@/infrastructure/interfaces/twitter-responses";

export const getPostByIdAction = async (id: string) => {
    try {
        const { data } = await api.get<TwitterPostResponse>(`/posts/${id}`);
        return PostMapper.fromTwitterToPost(data);
    } catch (error) { throw new Error('Post not found'); }
};