import { useLike } from '@/hooks/useLike';
import { useRetweet } from '@/hooks/useRetweet';
import { useBookmark } from '@/hooks/useBookmark';
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import { Pressable, PressableProps, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

interface Props {
    likes: number;
    retweets: number;
    replies: number;
    postId: string;
}

interface ActionButtonProps extends PressableProps {
    iconName: React.ComponentProps<typeof Ionicons>['name'];
    value: number;
}

const ActionButton = ({ iconName, value, ...pressableProps }: ActionButtonProps) => {
    return (
        <Pressable
            className="flex-row items-center gap-1 px-2 py-1 rounded-full active:opacity-70"
            {...pressableProps}>
            <Ionicons name={iconName} size={18} />
            <Text className="text-xs text-gray-600">{value}</Text>
        </Pressable>
    );
};

const PostActionButtons = ({ likes, retweets, replies, postId }: Props) => {
    const router = useRouter();

    const { nLikes, liked, toggleLike } = useLike(likes, false, postId);
    const { nRetweets, retweeted, toggleRetweet } = useRetweet(retweets, false, postId);
    const { nBookmarks, bookmarked, toggleBookmark } = useBookmark(0, false, postId); // bookmarks not in post, assume 0

    return (
        <View className="mt-3 font-lg flex-row justify-between pr-8">
            <ActionButton
                iconName={liked ? 'heart' : 'heart-outline'}
                value={nLikes}
                onPress={() => toggleLike()}
            />
            <ActionButton
                iconName={retweeted ? 'repeat' : 'repeat-outline'}
                value={nRetweets}
                onPress={() => toggleRetweet()}
            />
            <ActionButton
                iconName="chatbubble-outline"
                value={replies}
                onPress={() => router.push(`/feed/${postId}`)}
            />
            <ActionButton
                iconName={bookmarked ? 'bookmark' : 'bookmark-outline'}
                value={nBookmarks}
                onPress={() => toggleBookmark()}
            />
        </View>
    )
}

export default PostActionButtons