import { twitterApi } from "@/core/api/twitter-api";
import { Message } from "@/types/messages";
import { MessageMapper } from "@/infrastructure/interfaces/mappers/message.mapper";
import { TwitterMessageResponse } from "@/infrastructure/interfaces/twitter-message.response";

export const getMessagesAction = async (): Promise<Message[]> => {
    try {
        const { data } = await twitterApi.get<TwitterMessageResponse[]>('/messages');
        return data.map(MessageMapper.fromTwitterToMessage);
    } catch (error) {
        console.log(error);
        throw new Error('Error al cargar mensajes');
    }
};