import { User } from "@/types/users";
import { TwitterUserResponse } from "../twitter-user.response";

export class UserMapper {
    static fromTwitterToUser = (apiUser: TwitterUserResponse): User => {
        return {
            id: apiUser.id.toString(),
            username: apiUser.username,
            name: apiUser.name,
            bio: apiUser.bio,
            avatar: apiUser.avatarUrl,
            // Campos que la API no devuelve pero tu dominio necesita (valores por defecto)
            banner: 'https://placeholder.com/banner.jpg', 
            followersCount: 0,
            followingCount: 0,
            isFollowing: false,
        };
    }
}