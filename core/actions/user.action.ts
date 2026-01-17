import { twitterApi } from "@/core/api/twitter-api";
import { User } from "@/types/users";
import { UserMapper } from "@/infrastructure/interfaces/mappers/user.mapper";
import { TwitterUserResponse } from "@/infrastructure/interfaces/twitter-user.response";

export const getUsersAction = async (): Promise<User[]> => {
    try {
        const { data } = await twitterApi.get<TwitterUserResponse[]>('/users');
        return data.map(UserMapper.fromTwitterToUser);
    } catch (error) {
        console.log(error);
        throw new Error('Error al cargar usuarios');
    }
};