import { Post } from "@/types/post";
import { TwitterPostResponse } from "../twitter-responses";

export class PostMapper {
    static fromTwitterToPost = (apiPost: TwitterPostResponse): Post => {
        return {
            id: apiPost.id.toString(),
            // Aplanamos el objeto 'user' que viene de la API a las propiedades planas de tu interfaz Post
            userName: apiPost.userName,
            userHandle: apiPost.userHandle,
            userAvatar: apiPost.userAvatar,
            
            content: apiPost.content,
            // La API devuelve 'likesCount', tu interfaz usa 'likes'
            likes: apiPost.likes || 0,
            retweets: apiPost.retweets || 0,
            replies: apiPost.replies || 0,
            
            // Valores por defecto o mapeados si la API los devuelve
            isLiked: false, 
            isRetweeted: false,
            
            // Mapeo de fecha si es necesario, o se pasa el string directo
            // createdAt: new Date(apiPost.createdAt), 
        };
    }
}