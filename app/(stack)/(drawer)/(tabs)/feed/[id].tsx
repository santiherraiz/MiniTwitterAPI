import { useLocalSearchParams } from 'expo-router';
import { View, ScrollView, ActivityIndicator, Text } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { getPostByIdAction } from '@/core/actions/get-post-by-id.action';
import { getRepliesAction } from '@/core/actions/posts.action';
import PostCard from '@/components/post/PostCard';

export default function PostDetailScreen() {
    const { id } = useLocalSearchParams();
    
    const { data: post, isLoading: postLoading } = useQuery({
        queryKey: ['post', id],
        queryFn: () => getPostByIdAction(id as string),
        enabled: !!id
    });

    const { data: replies, isLoading: repliesLoading } = useQuery({
        queryKey: ['replies', id],
        queryFn: () => getRepliesAction(id as string),
        enabled: !!id
    });

    if (postLoading) return <ActivityIndicator size="large" className="mt-10" color="#1DA1F2" />;
    if (!post) return <Text className="text-center mt-10">Post no encontrado</Text>;

    return (
        <ScrollView className="flex-1 bg-white">
            {/* Post Principal */}
            <PostCard post={post} />

            <View className="border-t border-gray-100 mt-4 pt-4 px-4">
                <Text className="font-bold text-lg mb-4">Respuestas</Text>
                {repliesLoading ? (
                    <ActivityIndicator size="small" color="#1DA1F2" />
                ) : replies && replies.length > 0 ? (
                    replies.map(reply => <PostCard key={reply.id} post={reply} />)
                ) : (
                    <Text className="text-gray-500 italic">No hay respuestas disponibles.</Text>
                )}
            </View>
        </ScrollView>
    );
}