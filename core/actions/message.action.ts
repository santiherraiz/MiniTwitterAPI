import { api } from "@/core/api/twitter-api";
import { Message, Conversation } from "@/types/messages";
import { MessageMapper } from "@/infrastructure/interfaces/mappers/message.mapper";
import { TwitterMessageResponse, TwitterConversationResponse } from "@/infrastructure/interfaces/twitter-message.response";

export const getMessagesAction = async (): Promise<Message[]> => {
    try {
        const { data } = await api.get<TwitterMessageResponse[]>('/messages');
        return data.map(MessageMapper.fromTwitterToMessage);
    } catch (error) {
        console.log(error);
        throw new Error('Error al cargar mensajes');
    }
};

export const getConversationsAction = async (): Promise<Conversation[]> => {
    try {
        const { data } = await api.get<TwitterConversationResponse[]>('/conversations');
        return data.map(MessageMapper.fromTwitterToConversation);
    } catch (error) {
        console.log(error);
        throw new Error('Error al cargar conversaciones');
    }
};