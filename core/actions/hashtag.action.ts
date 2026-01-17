import { twitterApi } from "@/core/api/twitter-api";
import { Hashtag } from "@/types/hashtag";
import { HashtagMapper } from "@/infrastructure/interfaces/mappers/hashtag.mapper";
import { TwitterHashtagResponse } from "@/infrastructure/interfaces/twitter-hashtag.reponse";

export const getHashtagsAction = async (): Promise<Hashtag[]> => {
    try {
        const { data } = await twitterApi.get<TwitterHashtagResponse[]>('/hashtags');
        return data.map(HashtagMapper.fromTwitterToHashtag);
    } catch (error) {
        console.log(error);
        throw new Error('Error al cargar hashtags');
    }
};