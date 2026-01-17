import { Message } from "@/types/messages";
import { TwitterMessageResponse } from "../twitter-message.response";

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
}