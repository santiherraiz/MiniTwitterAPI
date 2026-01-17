import { Hashtag } from "@/types/hashtag";
import { TwitterHashtagResponse } from "../twitter-hashtag.reponse";

export class HashtagMapper {
    static fromTwitterToHashtag = (apiHashtag: TwitterHashtagResponse): Hashtag => {
        return {
            id: apiHashtag.id.toString(),
            name: apiHashtag.tag,
            postsCount: 0 // La API no devuelve contador, ponemos 0 o calculamos si fuera posible
        };
    }
}