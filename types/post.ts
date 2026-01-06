import { ImageSourcePropType } from "react-native";

export interface Post {
    id: string;
    userName: string;
    userHandle: string;
    userAvatar?: ImageSourcePropType;
    content?: string;
    imageUrl?: string;
    likes: number;
    retweets: number;
    replies: number;
}
