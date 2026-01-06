import { Post } from '@/types/post';
import React from 'react';
import { Image, Text, View } from 'react-native';
import Avatar from './Avatar';
import PostActionButtons from './PostActionButtons';

interface Props {
    post: Post;
}

const PostCard = ({ post }: Props) => {

    return (
        <View className="flex-row px-4 py-3 border-b border-gray-200 bg-quaternary">
            {/* Avatar a la izquierda */}
            <View className="mr-3">
                <Avatar userAvatar={post.userAvatar} userName={post.userName} />
            </View>

            {/* Contenido a la derecha */}
            <View className="flex-1">
                {/* Username */}
                <Text className="text-lg font-chirp-bold font-semibold text-gray-900">
                    {post.userName}
                </Text>

                {/* Imagen del post (opcional) */}
                {post.imageUrl ? (
                    <Image
                        source={{ uri: post.imageUrl }}
                        className="mt-3 w-full h-52 rounded-xl bg-gray-200"
                        resizeMode="cover"
                    />
                ) : null}

                {/* Contenido del post */}
                {post.content ? (
                    <Text className="mt-1 text-lg font-chirp-regular text-gray-800">
                        {post.content}
                    </Text>
                ) : null}

                {/* Botonera de acciones */}
                <PostActionButtons
                    likes={post.likes}
                    retweets={post.retweets}
                    replies={post.replies}
                />
            </View>
        </View>
    )
}

export default PostCard