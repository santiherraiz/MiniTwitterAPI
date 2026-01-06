import { useLike } from '@/hooks/useLike';
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import { Pressable, PressableProps, Text, View } from 'react-native';

interface Props {
    likes: number;
    retweets: number;
    replies: number;
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

const PostActionButtons = ({ likes, retweets, replies }: Props) => {

    const { nLikes, liked, setLikesCount, toggleLike } = useLike();

    useEffect(() => {
        setLikesCount(likes);
    }, [likes]);

    return (
        <View className="mt-3 font-lg flex-row justify-between pr-8">
            <ActionButton
                iconName={liked ? 'heart' : 'heart-outline'}
                value={nLikes}
                onPress={() => toggleLike()}
            />
            <ActionButton
                iconName="repeat-outline"
                value={retweets}
                onPress={() => { }}
            />
            <ActionButton
                iconName="chatbubble-outline"
                value={replies}
                onPress={() => { }}
            />
        </View>
    )
}

export default PostActionButtons