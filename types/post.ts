export interface Post {
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