import { ImageSourcePropType } from "react-native";

export interface Post {
    id: number;
    userName: string;
    userHandle: string;
    userAvatar?: string;
    content?: string;
    imageUrl?: string;
    likes: number;
    retweets: number;
    replies: number;
    liked?: boolean;
}
