import { api } from "@/core/api/twitter-api";
import { User } from "@/types/users";
import { UserMapper } from "@/infrastructure/interfaces/mappers/user.mapper";
import { TwitterUserResponse } from "@/infrastructure/interfaces/twitter-user.response";

export const getUsersAction = async (): Promise<User[]> => {
    try {
        const { data } = await api.get<TwitterUserResponse[]>('/users');
        return data.map(UserMapper.fromTwitterToUser);
    } catch (error) {
        console.log(error);
        throw new Error('Error al cargar usuarios');
    }
};

export const getUserByIdAction = async (userId: string): Promise<User> => {
    try {
        const { data } = await api.get<TwitterUserResponse>(`/users/${userId}`);
        return UserMapper.fromTwitterToUser(data);
    } catch (error) {
        console.log(error);
        throw new Error('Error al cargar usuario');
    }
};

export const toggleFollowAction = async (userId: string) => {
    try {
        const { data } = await api.post(`/users/${userId}/follow`);
        return data;
    } catch (error) {
        throw new Error('Error al seguir/dejar de seguir');
    }
};