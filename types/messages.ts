import { User } from './users';

export interface Message {
    id: string;
    content: string;
    createdAt: string;
    sender: User;
    receiver?: User;
}

export interface Conversation {
    id: string;
    withUser: User;
    lastMessage: Message;
}