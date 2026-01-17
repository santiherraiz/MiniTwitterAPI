export interface TwitterPostResponse {
    id: string;
    userName: string;
    userHandle: string;
    userAvatar?: string;
    content?: string;
    imageUrl?: string;
    likes: number;
    retweets: number;
    replies: number;
    isLiked?: boolean; 
    isRetweeted?: boolean;
}

export interface TwitterUserResponse {
    id: string;
    username: string;
    name: string;
    avatar?: string;
}