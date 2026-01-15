export interface User {
    id: string;
    username: string;
    name: string;
    avatar?: string;
    banner?: string;
    bio?: string;
    followersCount?: number;
    followingCount?: number;
    isFollowing?: boolean;
}