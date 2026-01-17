export interface TwitterMessageResponse {
    id: number;
    sender: string;
    receiver: string;
    content: string;
    createdAt: string;
    readAt: string;
}

export interface TwitterConversationResponse {
    id: string;
    withUser: {
        id: string;
        name: string;
        avatar: string;
    };
    lastMessage: {
        id: string;
        content: string;
        createdAt: string;
        sender: string;
        receiver: string;
    };
}