import { api } from "@/core/api/twitter-api";
import { Hashtag } from "@/types/hashtag";
import { HashtagMapper } from "@/infrastructure/interfaces/mappers/hashtag.mapper";
import { TwitterHashtagResponse } from "@/infrastructure/interfaces/twitter-hashtag.reponse";
import { Post } from "@/types/post";
import { PostMapper } from "@/infrastructure/interfaces/mappers/post.mapper";
import { TwitterPostResponse } from "@/infrastructure/interfaces/twitter-responses";

export const getHashtagsAction = async (): Promise<Hashtag[]> => {
    try {
        const { data } = await api.get<TwitterHashtagResponse[]>('/hashtags');
        return data.map(HashtagMapper.fromTwitterToHashtag);
    } catch (error) {
        console.log(error);
        throw new Error('Error al cargar hashtags');
    }
};

export const getPostsByHashtagAction = async (hashtag: string): Promise<Post[]> => {
    try {
        const { data } = await api.get<TwitterPostResponse[]>(`/hashtags/${hashtag}/posts`);
        return data.map(PostMapper.fromTwitterToPost);
    } catch (error) {
        console.log(error);
        throw new Error('Error al cargar posts del hashtag');
    }
};