import { View, Text, Image, Pressable } from 'react-native';
import { Post } from '@/types/post';
import { useRouter } from 'expo-router';
import Avatar from './Avatar';
import PostActionButtons from './PostActionButtons';
import { usePosts } from '@/hooks/usePosts'; // Importamos el hook

interface Props {
    post: Post;
}

export default function PostCard({ post }: Props) {
    const router = useRouter();
    const { likePostMutation } = usePosts(); // Usamos la mutación

    return (
        <Pressable 
            onPress={() => router.push(`/feed/${post.id}`)}
            className="flex-row p-4 border-b border-gray-100 bg-white active:bg-gray-50"
        >
            <Pressable onPress={() => {}}>
                <Avatar src={post.userAvatar} size="md" />
            </Pressable>
            
            <View className="flex-1 ml-3">
                <View className="flex-row items-center mb-1">
                    <Text className="font-bold text-base mr-1">{post.userName}</Text>
                    <Text className="text-gray-500 text-sm">@{post.userHandle}</Text>
                    <Text className="text-gray-500 text-sm mx-1">·</Text>
                    <Text className="text-gray-500 text-sm">2h</Text>
                </View>

                <Text className="text-base text-gray-900 leading-5 mb-2">{post.content}</Text>

                {post.imageUrl && (
                    <Image source={{ uri: post.imageUrl }} className="w-full h-48 rounded-xl mb-2 bg-gray-100" resizeMode="cover"/>
                )}

               {/* Conectamos los botones */}
               <PostActionButtons 
                    likes={post.likes} 
                    replies={post.replies} 
                    retweets={post.retweets} 
                    isLiked={post.isLiked}
                    isRetweeted={post.isRetweeted}
                    onLike={() => likePostMutation.mutate(post.id)} // <--- AQUÍ LA MAGIA
                    onRetweet={() => {}} // Implementar similar si tienes la acción
                    onReply={() => router.push(`/feed/${post.id}`)} // Ir al detalle para responder
               />
            </View>
        </Pressable>
    );
}