import { Message, Conversation } from "@/types/messages";
import { TwitterMessageResponse, TwitterConversationResponse } from "../twitter-message.response";

export class MessageMapper {
    static fromTwitterToMessage = (apiMsg: TwitterMessageResponse): Message => {
        return {
            id: apiMsg.id.toString(),
            content: apiMsg.content,
            createdAt: apiMsg.createdAt,
            // Creamos usuarios 'dummy' porque la API solo da un string.
            // En una app real, quizas tendrías que hacer un 'expand' o buscar el usuario por ID.
            sender: {
                id: apiMsg.sender, 
                username: 'unknown',
                name: 'Unknown User',
            },
            receiver: {
                id: apiMsg.receiver,
                username: 'unknown',
                name: 'Unknown User',
            }
        };
    }

    static fromTwitterToConversation = (apiConv: TwitterConversationResponse): Conversation => {
        return {
            id: apiConv.id,
            withUser: {
                id: apiConv.withUser.id,
                username: 'unknown',
                name: apiConv.withUser.name,
                avatar: apiConv.withUser.avatar,
            },
            lastMessage: {
                id: apiConv.lastMessage.id,
                content: apiConv.lastMessage.content,
                createdAt: apiConv.lastMessage.createdAt,
                sender: {
                    id: apiConv.lastMessage.sender,
                    username: 'unknown',
                    name: 'Unknown User',
                },
                receiver: apiConv.lastMessage.receiver ? {
                    id: apiConv.lastMessage.receiver,
                    username: 'unknown',
                    name: 'Unknown User',
                } : undefined,
            },
        };
    }
}